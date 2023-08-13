import React from 'react'
import Wrapper from '../Components/Wrapper'
import MovieCard  from '../Components/MovieCard'
import {useContext} from 'react'
import {AppContextData} from '../Context/Appcontext'
function Favourite() {
  const {state} = useContext(AppContextData)
  let results= state.favourite
  return (
    <div>
       <Wrapper>
       <h2 className="sectionTitle">Favourites</h2>
          <div className="gallery">
          {results.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} />;
          })} 
        </div>
       </Wrapper>
    </div>
  )
}

export default Favourite