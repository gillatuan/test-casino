import { useGetData } from '@/api/common'
import { Default_Search_Filter_Data } from '@/constants/general'
import { SearchFilterContext } from '@/context/SearchFilterContext'
import AuthenticatedLayout from '@/layouts/Authenticated'
import Invoices from '@/modules/Invoices'
import { MyFilter } from '@/modules/MyFilter'
import { ISearchFilter } from '@/types/search.type'
import { Col, Row } from 'antd'
import { useMemo, useState } from 'react'
import { useQuery } from 'react-query'

const Dashboard = () => {
  const [searchFilter, setSearchFilter] = useState<ISearchFilter>(Default_Search_Filter_Data)

  let orgToken: string | null
  if (typeof window !== 'undefined') {
    orgToken = window.localStorage.getItem('org_token')
  }

  const { isLoading, isError, data, error } = useQuery(`me-${searchFilter.pageNumber}`, ({ signal }) =>
    useGetData(
      `/invoice-service/1.0.0/invoices?pageNum=${searchFilter.pageNumber}&pageSize=10&dateType=INVOICE_DATE&sortBy=CREATED_DATE&ordering=ASCENDING`,
      {
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'org-token': orgToken
        }
      }
    )
  )

  const items = useMemo(() => {
    if (data?.status === 200) {
      setSearchFilter({
        ...searchFilter,
        totalRecords: data.data.paging.totalRecords
      })
      return data.data.data
    }

    return []
  }, [data, searchFilter.pageNumber])

  const value = {
    data: items,
    isLoading,
    isError,
    searchFilter,
    setSearchFilter
  }

  return (
    <AuthenticatedLayout>
      <SearchFilterContext.Provider value={value}>
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
      </SearchFilterContext.Provider>
    </AuthenticatedLayout>
  )
}

export default Dashboard
