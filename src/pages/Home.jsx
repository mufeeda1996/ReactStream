import React from 'react'
import Wrapper from '../Components/Wrapper'
import Slider from '../Components/Slider'
import Loader from '../Components/Loader'
import MovieCard  from '../Components/MovieCard'
import Pagination from '../Components/Pagination'
import { useState } from 'react'
import { useFetch } from "../Hooks/useFetch";
import{ AppContextData} from '../Context/Appcontext'
import { useContext } from 'react'
function Home() {
// const [page,setPages]=useState(1)
const {
  state: { page },} = useContext(AppContextData);

const [data,loading,error]=useFetch('movie/popular',{page})

const {results,total_pages} =data
  return (
    <div>
       
      <Slider/>
      <Wrapper>
         {loading && <p><Loader/></p>}
          {error && <p><Error>{error}</Error></p>}
          {
          !error && !loading &&(
          <>
          <h2 className="sectionTitle">Popular Movies</h2>
          <div className="gallery">
          {results.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} />;
          })} 
        </div>
        <Pagination page={page}  total_pages={total_pages} />
        </>
        )}
       
      </Wrapper>
    
    </div>
  )
}

export default Home