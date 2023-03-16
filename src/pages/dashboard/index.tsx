import AuthenticatedLayout from '@/layouts/Authenticated'
import { Invoices } from '@/modules/Invoices'
import { MyFilter } from '@/modules/MyFilter'
import { Col, Row } from 'antd'

const Dashboard = () => {
  return (
    <AuthenticatedLayout>
      <>
        <Row gutter={40}>
          <Col md={24}>
            <MyFilter />
          </Col>
        </Row>
        <Row gutter={40}>
          <Col md={24}>
            <Invoices />
          </Col>
        </Row>
      </>
    </AuthenticatedLayout>
  )
}

export default Dashboard
