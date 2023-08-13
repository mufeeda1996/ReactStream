import React from 'react'
import { useState } from 'react'
import { useFetch } from '../Hooks/useFetch'
import {Link} from 'react-router-dom'

function SearchBox () {
  const [query, setQuery] = useState([])
  const [data] = useFetch(`search/movie`, { query})
  console.log('dataaaaaaaaaaaa', data)
 
  return (
    <div>
      <div className='searchBox'>
        <input
          className='searchField'
          value={query}
          type='search'
          onChange={event => setQuery(event.target.value)}
        />
        <div className='resultBox '>
        <ul>
        
          {data?.results?.map(item => {
            return (
             <Link to={`/movie/${item.id}`}>
                <li> 
                   <img src={`https://image.tmdb.org/t/p/w200${item?.backdrop_path}`} alt={item.title}></img>
                  <div>
                    <h4>{item.title}</h4>
                  </div> 
                </li>
                </Link>
            )
          })}
        </ul> 
     </div> 
      </div>
    </div>
  )
}

export default SearchBox
