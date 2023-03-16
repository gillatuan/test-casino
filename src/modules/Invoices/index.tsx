import { useGetData } from '@/api/common'
import { useQuery } from 'react-query'

export const Invoices = () => {
  let orgToken: string | null
  if (typeof window !== 'undefined') {
    orgToken = window.localStorage.getItem('org_token')
  }
  const { isLoading, isError, data, error } = useQuery(`me`, ({ signal }) =>
    useGetData(
      `/invoice-service/1.0.0/invoices?pageNum=1&pageSize=10&dateType=INVOICE_DATE&sortBy=CREATED_DATE&ordering=ASCENDING`,
      {
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'org-token': orgToken
        }
      }
    )
  )

  console.log('====================================')
  console.log('data', data)
  console.log('====================================')
  return <p>Invoices</p>
}
