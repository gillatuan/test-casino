import React, { useContext, useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import { MenuProps } from 'antd'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons'

import { SearchFilterContext } from '@/context/SearchFilterContext'

type Props = {}

const Header = (props: Props) => {
  const { data, searchFilter, setSearchFilter } = useContext(SearchFilterContext)

  const [toggleMenu, setToggleMenu] = useState<boolean>(false)

  const categories = useMemo(() => {
    let arr: string[] = []
    if (data && data.length > 0) {
      for (let i = 0; i < data.length; i++) {
        if (i === 0) {
          arr = data[i].categories
        }
        if (i > 0) {
          const newItem = data[i].categories.filter(
            (item: string) => item !== 'ball' && item !== 'virtual' && item !== 'fun' && arr.indexOf(item) < 0
          )
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
        <div className='menu-item'>
          <div className='relative' onMouseOver={() => setToggleMenu(true)} onMouseOut={() => setToggleMenu(false)}>
            <p>Other</p>
            {toggleMenu && (
              <div className='child-menu'>
                <div className='menu-item' onClick={() => handleSelectItem('ball')}>
                  <p>Ball</p>
                </div>
                <div className='menu-item' onClick={() => handleSelectItem('virtual')}>
                  <p>Virtual</p>
                </div>
                <div className='menu-item' onClick={() => handleSelectItem('fun')}>
                  <p>Fun</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
