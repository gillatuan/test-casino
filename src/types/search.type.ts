export interface ISearchFilter {
  fromDate?: Date
  keyword?: string
  pageNumber?: number
  payType?: string[]
  pageSize?: number
  toDate?: Date
  totalRecords: number | 0
}
