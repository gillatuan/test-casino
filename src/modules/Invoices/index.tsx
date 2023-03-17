import { useContext, useMemo, useState } from 'react'
import { withCheckRole } from '@/hoc/withCheckRole'
import { Col, Pagination, Row, Table } from 'antd'
import { SearchFilterContext } from '@/context/SearchFilterContext'
import { ColumnsType } from 'antd/es/table'
import { Datum } from '@/types/invoices.type'

const Invoices = () => {
  const { data, isLoading, searchFilter, setSearchFilter } = useContext(SearchFilterContext)
  const columns: ColumnsType<Datum> = [
    {
      title: 'Invoice Id',
      dataIndex: 'invoiceId',
      key: 'invoiceId',
      render: (_, record) => {
        return <span>{record.invoiceId}</span>
      }
    },
    {
      title: 'Customer',
      dataIndex: 'Customer',
      key: 'customer',
      render: (_, record) => {
        if (record.customer) {
          return (
            <div className='flex items-center'>
              {/* <Image src={CompanyLogo} alt='company-logo' width={60} height={60} /> */}
              <div className='ml-5'>
                <p className='font-bold text-[14px] text-[#1D1929]'>{record.customer.name}</p>
                <div className='flex items-center mt-1'>
                  <span className='text-dark-gray text-[11px] font-[600]'>{record.customer.addresses}</span>
                </div>
              </div>
            </div>
          )
        }
      }
    },
    {
      title: 'Balance Amount',
      dataIndex: 'balanceAmount',
      key: 'balanceAmount',
      render: (_, record) => {
        return <span>{record.balanceAmount}</span>
      }
    },
    {
      title: 'Total Tax',
      dataIndex: 'totalTax',
      key: 'totalTax',
      render: (_, record) => {
        return <span>{record.totalTax}</span>
      }
    }
  ]

  return (
    <div className='search-result'>
      <h2 className='text-[30px] mt-[20px]'>Invoices</h2>
      <div className='result-container mt-[20px]'>
        <Row gutter={40}>
          <Col md={24} xs={24}>
            <Table
              columns={columns}
              dataSource={data}
              loading={isLoading}
              pagination={false}
              rowKey={(record) => record.invoiceId}
            />
          </Col>
          <Col md={24} xs={24}>
            {(searchFilter.totalRecords > 0 && (
              <Pagination
                className='app-paging flex mt-[27px]'
                total={searchFilter.totalRecords}
                showTotal={(total, range) => {
                  return `${range[0]}-${range[1]} of ${total} items`
                }}
                defaultCurrent={searchFilter.pageNumber}
                showSizeChanger
                onChange={(p, size) => setSearchFilter({ ...searchFilter, pageNumber: p, pageSize: size })}
              />
            )) ||
              null}
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default withCheckRole(Invoices)
