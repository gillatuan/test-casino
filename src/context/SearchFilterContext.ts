import { createContext, useContext } from 'react'
import { Default_Search_Filter_Data } from '@/constants/general'
import { ISearchFilter } from '@/types/search.type'

export type TSearchFilterContext = {
  data?: any
  jackpotData?: any
  isLoading?: boolean
  isError?: boolean
  searchFilter: ISearchFilter
  setSearchFilter: (data: ISearchFilter) => void
}
export const SearchFilterContext = createContext<TSearchFilterContext>({
  data: undefined,
  jackpotData: undefined,
  isLoading: undefined,
  isError: undefined,
  searchFilter: Default_Search_Filter_Data,
  setSearchFilter: (data: ISearchFilter) => {}
})
