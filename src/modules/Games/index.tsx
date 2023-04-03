import { useContext } from 'react'
import Image from 'next/image'

import { SearchFilterContext } from '@/context/SearchFilterContext'

const Games = () => {
  const { data, isLoading, searchFilter, setSearchFilter } = useContext(SearchFilterContext)

  return (
    <div className='search-result max-w-[1200px] mx-auto'>
      <div className='result-container'>
        {data.map((item: any, k: number) => {
          return (
            <div key={`game-${k}`} className='image-container'>
              <Image src={`http:${item.image}`} alt={item.name} fill sizes='100vw' />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Games
