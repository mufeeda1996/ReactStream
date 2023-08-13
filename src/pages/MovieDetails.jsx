import React from 'react'
import { useParams } from 'react-router-dom'
import Wrapper from '../Components/Wrapper'
import { useFetch } from '../Hooks/useFetch'
function MovieDetails () {
  const { id } = useParams()
  const [data] = useFetch(`movie/${id}`)
  console.log('dasd', data)

  const backdrop= {
    backgroundImage:`url(https://image.tmdb.org/t/p/w1280${data?.backdrop_path})`    
   }

  return (

    <div className='moviePage' style={backdrop}>
      <Wrapper>
        <div className='movieContent'>
          <div className='moviePoster'>
        
              <img src={`https://image.tmdb.org/t/p/w500${data?.backdrop_path}`} alt={data.title}></img>
          </div>

          <div className='movieInfo'>
            <div className='movieTitle'>
              <h1>{data?.title}</h1>
              <h3>{data?.tagline}</h3>
            </div>

            <div className='moviePlot'>{data?.overview}</div>

            <div className='movieDetails'>
              <div className='movieDetailsItem'>
                <h3>Language</h3>
                <div>
                  {data?.spoken_languages?.map(item => {
                    return <span key={item.iso_639_1}>{item.english_name}</span>
                  })}
                </div>
              </div>
              <div className='movieDetailsItem'>
                <h3>Genre</h3>
                <div>
                  {data?.genres?.map(item => {
                    return <span>{item.name
                    }</span>
                  })}
                </div>
              </div>
              <div className='movieDetailsItem'>
                <h3>Runtime</h3>
                <div>
                {data.runtime}
                </div>
              </div>
              <div className='movieDetailsItem'>
                <h3>Rating</h3>
                <div>
                {data.vote_average
}
                </div>
              </div>
            </div>


            {/* <div className='movieDetails'>
             
            </div>

            <div className='movieDetails'>
              
            </div> */}
          </div>
        </div>
      </Wrapper>
    </div>
    // <div className='moviePage'>
    //     <Wrapper>
    //         <div className='movieContent'>
    //             <div className='moviePoster'>
    //             <img src={`https://image.tmdb.org/t/p/w1280${data?.backdrop_path}`} alt={data.title}></img>
    //             </div>
    //             <div className='movieInfo'>
    //                 <div className='movieTitle'>
    //                     <h1>{data?.title}</h1>
    //                     <h3>{data?.tagline}</h3>
    //                 </div>
    //             </div>

    //             <div className='moviePlot'>{data?.overview}</div>
    //             <div className='movieDetails'>
    //                 <div className='movieDetailsItem'>
    //                 <h3>language</h3>
    //                 <div>
    //                  {
    //                     data?.spoken_languages?.map((item)=>{
    //                     return(
    //                         <span key={item.iso_639_1}>
    //                           {item.english_name}
    //                         </span>
    //                     )
    //                     })
    //                  }
    //                 </div>
    //                 </div>
    //                 <div className='movieDetailsItem'>
    //                     <h3>language</h3>
    //                 </div>
    //                 <div className='movieDetailsItem'>
    //                     <h3>genre</h3>
    //                 </div>
    //                 <div className='movieDetailsItem'>
    //                     <h3>abc</h3>
    //                 </div>
    //             </div>
    //         </div>
    //     </Wrapper>
    // </div>
  )
}

export default MovieDetails
