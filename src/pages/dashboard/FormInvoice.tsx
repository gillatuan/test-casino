import { Col, Form, notification, Row } from 'antd'
import { useContext, useEffect, useMemo, useState } from 'react'

import { MyButtonMemoize } from '@/components/MyButton'
import { MyDrawer } from '@/components/MyDrawer'
import { MyInput } from '@/components/MyInput'
import { MyTextarea } from '@/components/MyTextarea'
import { SearchFilterContext } from '@/context/SearchFilterContext'
import { DataInvoice } from './types'
import { useMutation } from 'react-query'
import { usePostData } from '@/api/common'
import { CreateInvoice } from '@/constants/mockData'

export const FormInvoice = () => {
  let orgToken: string | null
  if (typeof window !== 'undefined') {
    orgToken = window.localStorage.getItem('org_token')
  }

  const [api, contextHolder] = notification.useNotification()

  const { toggleDrawer, setToggleDrawer } = useContext(SearchFilterContext)

  const [dataInvoice, setDataInvoice] = useState<DataInvoice>({
    itemReference: '',
    quantity: '',
    description: ''
  })

  const [disabled, setDisabled] = useState<boolean>(true)
  useEffect(() => {
    if (dataInvoice.itemReference && dataInvoice.quantity) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }, [dataInvoice.itemReference, dataInvoice.quantity])

  const buttonCls = useMemo(() => {
    let cls = 'w-full app-button custom !text-white'
    if (disabled) {
      cls += ' disabled !text-black'
    }
    return cls
  }, [disabled])

  const handleOnChange = (name: string, val: string | number) => {
    setDataInvoice({
      ...dataInvoice,
      [name]: val
    })
  }

  const mutation = useMutation(
    'new-invoice',
    async (data: any) =>
      await usePostData('/invoice-service/2.0.0/invoices', data, {
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'org-token': orgToken,
          'Operation-Mode': 'SYNC'
        }
      }),
    {
      onError: (err: any) => {
        api['error']({
          className: 'apply-status',
          message: (
            <div className='flex flex-col items-center status-sent'>
              <h2>Error</h2>
            </div>
          ),
          description: (
            <div className='status-desc'>
              <p>{err?.message}</p>
            </div>
          ),
          duration: null
        })
      },
      onSuccess: (data: any) => {
        api['success']({
          className: 'apply-status',
          message: (
            <div className='flex flex-col items-center status-sent'>
              <h2>Success</h2>
            </div>
          ),
          description: <div className='status-desc'></div>,
          duration: null
        })
      }
    }
  )

  const handleSubmit = async () => {
    const invoices = {
      ...CreateInvoice.invoices[0],
      items: [{ ...CreateInvoice.invoices[0].items[0], ...dataInvoice }]
    }

    const resp = await mutation.mutateAsync(invoices)
  }

  return (
    <MyDrawer
      className='invoice-form-drawer'
      height='100vh'
      placement='right'
      size='default'
      width='600px'
      open={toggleDrawer}
      headerStyle={{ position: 'absolute', right: 0, borderBottom: 'none' }}
      onClose={() => setToggleDrawer(false)}
    >
      <Form>
        <Row gutter={40}>
          <Col md={24}>
            <h3 className='text-lg'>Create New Invoice</h3>
          </Col>
        </Row>
        <Row>
          <Col md={24}>
            <Form.Item
              name='itemReference'
              rules={[
                {
                  required: true,
                  message: 'Please input Item Reference!'
                }
              ]}
            >
              <MyInput
                className='mt-[20px]'
                label='Item Reference'
                name='itemReference'
                onChange={(val) => handleOnChange('itemReference', val)}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col md={24}>
            <Form.Item>
              <MyTextarea
                label='Description'
                name='description'
                onChange={(val) => handleOnChange('description', val)}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col md={24}>
            <Form.Item
              name='quantity'
              rules={[
                {
                  required: true,
                  message: 'Please input Quantity!'
                }
              ]}
            >
              <MyInput
                label='Quantity'
                name='quantity'
                type='number'
                onChange={(val) => handleOnChange('quantity', val)}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col md={24}>
            <MyButtonMemoize
              className={buttonCls}
              disabled={disabled}
              label='Create New Invoice'
              handleClick={() => handleSubmit()}
            />
          </Col>
        </Row>
      </Form>
    </MyDrawer>
  )
}
