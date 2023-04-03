import React, { useContext, useMemo } from 'react'
import { useRouter } from 'next/router'
import { SearchFilterContext } from '@/context/SearchFilterContext'

type Props = {}

const Header = (props: Props) => {
  const router = useRouter()

  const { data, searchFilter, setSearchFilter } = useContext(SearchFilterContext)
  const categories = useMemo(() => {
    let arr: string[] = []
    if (data && data.length > 0) {
      for (let i = 0; i < data.length; i++) {
        if (i === 0) {
          arr = data[i].categories
        }
        if (i > 0) {
          const newItem = data[i].categories.filter((item: string) => arr.indexOf(item) < 0)
          if (newItem.length > 0) {
            arr.push(...newItem)
          }
        }
      }
    }

    return arr
  }, [data])

  const handleSelectItem = (category: string) => {
    setSearchFilter({
      ...searchFilter,
      categories: category.toLowerCase()
    })
  }

  return (
    <div className='flex items-center justify-between w-full'>
      <div className='flex menus'>
        {categories.map((item, k) => {
          let clsName = 'menu-item'
          if (searchFilter.categories === item.toLowerCase()) {
            clsName += ' active'
          }

          return (
            <div className={clsName} key={`cate-${k}`} onClick={() => handleSelectItem(item)}>
              <p>{item}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Header
