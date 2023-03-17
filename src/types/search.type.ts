export interface ISearchFilter {
  fromDate?: string | ''
  keyword?: string | ''
  pageNumber?: number
  payType?: string[]
  pageSize?: number
  toDate?: string | ''
  totalRecords: number | 0
}
