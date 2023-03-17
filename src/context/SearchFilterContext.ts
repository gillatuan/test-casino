import { createContext } from 'react'
import { Default_Search_Filter_Data } from '@/constants/general'
import { ISearchFilter } from '@/types/search.type'

type TSearchFilterContext = {
  data?: any
  isLoading?: boolean
  isError?: boolean
  searchFilter: ISearchFilter
  setSearchFilter: (data: ISearchFilter) => void
}
export const SearchFilterContext = createContext<TSearchFilterContext>({
  data: undefined,
  isLoading: undefined,
  isError: undefined,
  searchFilter: Default_Search_Filter_Data,
  setSearchFilter: (data: ISearchFilter) => {}
})
