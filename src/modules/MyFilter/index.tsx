import Image from 'next/image'
import { useContext } from 'react'

import { MyInput } from '@/components/MyInput'

import { SearchFilterContext } from '@/context/SearchFilterContext'

import SearchIcon from '/public/icons/search.svg'
import { MyRangePicker } from '@/components/MyRangePicker'
import { MyButtonMemoize } from '@/components/MyButton'
import { parseDate } from '@/utils/general'

export const MyFilter = () => {
  const { searchFilter, toggleDrawer, setSearchFilter, setToggleDrawer } = useContext(SearchFilterContext)

  const handleFilter = (name: string, val: any) => {
    setSearchFilter({
      ...searchFilter,
      [name]: val
    })
  }
  const handleDateRange = (from: Date, to: Date) => {
    const parseFrom = parseDate(from)
    const parseTo = parseDate(to)
    setSearchFilter({
      ...searchFilter,
      fromDate: parseFrom,
      toDate: parseTo
    })
  }
  const handleCreateItem = () => {
    setToggleDrawer(!toggleDrawer)
  }

  return (
    <div className='flex gap-[20px]'>
      <MyInput
        inputStyle='app-input custom'
        name='keyword'
        placeholder='i.e IV1649318870503'
        prefix={<Image className='h-[15px]' src={SearchIcon} alt='keyword' />}
        onChange={(val) => handleFilter('keyword', val)}
      />
      <MyRangePicker onChange={(dates) => handleDateRange(dates[0], dates[1])} />
      <MyButtonMemoize
        className='app-button btn-transparent'
        label='Create new Invoice'
        handleClick={handleCreateItem}
      />
    </div>
  )
}
