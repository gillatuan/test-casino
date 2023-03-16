import { Col, Form, Input, notification, Row } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useMutation } from 'react-query'

import { usePostData } from '@/api/common'

const LoginPage = () => {
  const router = useRouter()

  const mutation = useMutation(
    'login',
    async (data: URLSearchParams) =>
      await usePostData('/token', data, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        }
      })
  )
  const [form] = Form.useForm()
  const [api, contextHolder] = notification.useNotification()

  const handleLogin = async () => {
    let userData = {
      username: form.getFieldValue('username'),
      password: form.getFieldValue('password'),
      client_id: process.env.CLIENT_ID || 'oO8BMTesSg9Vl3_jAyKpbOd2fIEa',
      client_secret: process.env.CLIENT_SECRET || '0Exp4dwqmpON_ezyhfm0o_Xkowka',
      grant_type: process.env.GRANT_TYPE || 'password',
      scope: process.env.SCOPE || 'openid'
    }
    const formData = new URLSearchParams()
    formData.append('username', form.getFieldValue('username'))
    formData.append('password', form.getFieldValue('password'))
    formData.append('client_id', userData.client_id)
    formData.append('client_secret', userData.client_secret)
    formData.append('grant_type', userData.grant_type)
    formData.append('scope', userData.scope)

    const resp = await mutation.mutateAsync(formData)

    if (resp.status === 400) {
      return api['error']({
        message: `${resp.statusText} ${resp.status}`,
        description: resp.data?.message
      })
    }
    if (resp.status === 415) {
      return api['error']({
        message: `Error ${resp.status}`,
        description: 'Login Incorrectly'
      })
    }

    if (resp.status === 200) {
      api['success']({
        message: `Success`,
        description: `Login successfully`
      })

      localStorage.setItem('access_token', resp.data.access_token)
      localStorage.setItem('expires_in', resp.data.expires_in)
      localStorage.setItem('id_token', resp.data.id_token)
      localStorage.setItem('username', userData.username)

      router.push('/')
    }
  }

  return (
    <Row>
      <Col md={10}>
        <div className='flex flex-col justify-between items-center px-10 h-screen py-5 bg-gradient-to-b from-[#0A3636]  to-[#236B58]'></div>
      </Col>
      <Col md={14}>
        <div className='flex items-center justify-center h-screen'>
          <div className='w-[420px]'>
            <h1 className='text-[34px] leading-[34px] font-bold mb-0'>Welcome back to</h1>
            <p className='text-gray-primary text-[13px] mb-8 mt-3 font-bold'>
              Didn’t have account yet? <Link href='/signup'>Sign up</Link>
            </p>
            <Form form={form} className='mt-8 app-form'>
              <Form.Item
                name='username'
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!'
                  },
                  {
                    type: 'email',
                    message: 'Please input a valid username!'
                  }
                ]}
              >
                <Input className='app-input' placeholder='username' />
              </Form.Item>
              <Form.Item
                name='password'
                className='mb-2'
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!'
                  },
                  {
                    min: 6,
                    message: 'Password must be at least 6 characters!'
                  }
                ]}
              >
                <Input.Password className='app-input' placeholder='Password' />
              </Form.Item>
              <button className='w-full mt-6 app-button black' onClick={handleLogin}>
                <span className='ml-2'>Log in</span>
              </button>
            </Form>
            <div className='border-b-2 border-dashed border-[#D2D1D4] mt-5' />
          </div>
        </div>
      </Col>
      {contextHolder}
    </Row>
  )
}

export default LoginPage
