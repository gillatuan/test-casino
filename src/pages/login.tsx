import { Col, Form, Input, notification, Row } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useLogin } from '@/api/user'

const LoginPage = () => {
  const router = useRouter()

  const useMutation = useLogin()
  const [form] = Form.useForm()
  const [api, contextHolder] = notification.useNotification()

  const handleLogin = async () => {
    let userData = {
      username: form.getFieldValue('username'),
      name: form.getFieldValue('name'),
      password: form.getFieldValue('password'),
      userRole: undefined
    }

    const resp = await useMutation.mutateAsync(userData)

    if (resp.status === 400) {
      return api['error']({
        message: `${resp.statusText} ${resp.status}`,
        description: resp.data?.message
      })
    }

    if (resp.data) {
      api['success']({
        message: `Success`,
        description: `Login successfully`
      })

      localStorage.setItem('token', resp.data.data.user.token)
      localStorage.setItem('username', userData.username)
      localStorage.setItem('userRole', resp.data.data.user.userRole || '')
      localStorage.setItem('isOnboard', resp.data.data.user.isOnboard || 'false')

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
