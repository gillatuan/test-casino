import { Col, Form, Input, notification, Row } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useMutation } from 'react-query'

import { usePostData } from '@/api/common'
import { withCheckRole } from '@/hoc/withCheckRole'
import styles from '@/styles/Login.module.scss'
import { MyButtonMemoize } from '@/components/MyButton'

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

      router.push('/dashboard')
    }
  }

  return (
    <div className={styles['login-page']}>
      <div className={styles['login-box']}>
        <Row>
          <Col md={10}>
            <div className={styles['illustration-wrapper']}>
              <img
                src='https://mixkit.imgix.net/art/preview/mixkit-left-handed-man-sitting-at-a-table-writing-in-a-notebook-27-original-large.png?q=80&auto=format%2Ccompress&h=700'
                alt='Login'
              />
            </div>
          </Col>
          <Col md={14}>
            <div className='flex items-center justify-center h-screen'>
              <Form form={form} id={styles['login-form']}>
                <p className={styles['form-title']}>Welcome back</p>
                <p>Login to the Dashboard</p>
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
                <MyButtonMemoize type='primary' label='Login' handleClick={handleLogin} />
              </Form>
              <div className='border-b-2 border-dashed border-[#D2D1D4] mt-5' />
            </div>
          </Col>
          {contextHolder}
        </Row>
      </div>
    </div>
  )
}

export default withCheckRole(LoginPage)
