import { useGetData } from '@/api/common'
import { Default_Search_Filter_Data } from '@/constants/general'
import { SearchFilterContext } from '@/context/SearchFilterContext'
import MainLayout from '@/layouts'
import Header from '@/layouts/Header'
import Games from '@/modules/Games'
import { ISearchFilter } from '@/types/search.type'
import { parseObjectToStringUrl } from '@/utils/general'
import { Col, Row } from 'antd'
import { useMemo, useState } from 'react'
import { useQuery } from 'react-query'

const Dashboard = () => {
  const [searchFilter, setSearchFilter] = useState<ISearchFilter>(Default_Search_Filter_Data)

  const [toggleDrawer, setToggleDrawer] = useState<boolean>(false)

  let orgToken: string | null
  if (typeof window !== 'undefined') {
    orgToken = window.localStorage.getItem('org_token')
  }

  const paramUrl = parseObjectToStringUrl(searchFilter)
  const { isLoading, isError, data, error } = useQuery(`data-category-${searchFilter.categories}`, ({ signal }) =>
    useGetData(`http://stage.whgstage.com/front-end-test/games.php?${paramUrl}`, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      signal
    })
  )

  const items = useMemo(() => {
    if (data && data.status === 200) {
      return data.data
    }

    return []
  }, [data])

  const value = {
    data: items,
    isLoading,
    isError,
    searchFilter,
    toggleDrawer,
    setSearchFilter,
    setToggleDrawer
  }

  return (
    <MainLayout>
      <SearchFilterContext.Provider value={value}>
        <Row>
          <Col md={24}>
            <Header />
          </Col>
        </Row>
        <Row gutter={20}>
          <Col md={24}>
            <Games />
          </Col>
        </Row>
      </SearchFilterContext.Provider>
    </MainLayout>
  )
}

export default Dashboard
