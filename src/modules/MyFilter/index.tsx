import Image from 'next/image'
import { useContext } from 'react'

import { MyInput } from '@/components/MyInput'

import { SearchFilterContext } from '@/context/SearchFilterContext'

import SearchIcon from '/public/icons/search.svg'
import { MyRangePicker } from '@/components/MyRangePicker'

export const MyFilter = () => {
  const { searchFilter, setSearchFilter } = useContext(SearchFilterContext)

  const handleFilter = (name: string, val: any) => {
    if (val === 0 || (typeof val === 'object' && val.length === 0)) {
      val = undefined
    }
    setSearchFilter({
      ...searchFilter,
      [name]: val
    })
  }
  const handleDateRange = (from: Date, to: Date) => {
    debugger
  }

  return (
    <>
      <MyInput
        inputStyle='app-input custom'
        name='keyword'
        placeholder='i.e IV1649318870503'
        prefix={<Image className='h-[15px]' src={SearchIcon} alt='keyword' />}
        onChange={(val) => handleFilter('keyword', val)}
      />
      <MyRangePicker onChange={(dates) => handleDateRange(dates[0], dates[1])} />
    </>
  )
}
