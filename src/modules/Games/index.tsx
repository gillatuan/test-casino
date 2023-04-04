import { useContext, useMemo } from 'react'
import Image from 'next/image'

import { SearchFilterContext } from '@/context/SearchFilterContext'
import { clone } from 'lodash'

const Games = () => {
  const { data, isLoading, jackpotData, searchFilter, setSearchFilter } = useContext(SearchFilterContext)
  const dataFilter = useMemo(() => {
    let dataFilterred = clone(data)
    if (searchFilter.categories) {
      dataFilterred = data.filter((item: any) => item.categories.indexOf(searchFilter.categories) > -1)
    }

    return dataFilterred
  }, [data, searchFilter.categories])
  const dataFinal = useMemo(() => {
    let dataFormat: any[] = []
    if (dataFilter.length > 0 && jackpotData.data) {
      dataFilter.filter((item: any) => {
        item.amount = undefined
        jackpotData.data.data.filter((jackpot: any) => {
          if (item.id === jackpot.game) {
            item.amount = jackpot.amount
          }

          return item
        })

        dataFormat.push(item)
      })
    }

    return dataFormat
  }, [dataFilter, jackpotData.data])

  return (
    <div className='search-result max-w-[1200px] mx-auto'>
      <div className='result-container'>
        {dataFinal.map((item: any, k: number) => {
          return (
            <div key={`game-${k}`} className='image-container'>
              {item.amount && (
                <div className='jackpot'>
                  <span>${item.amount}</span>
                </div>
              )}
              <Image src={`http:${item.image}`} alt={item.name} fill sizes='100vw' />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Games
