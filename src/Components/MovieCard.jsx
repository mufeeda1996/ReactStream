import React from 'react'
import { Link } from 'react-router-dom'
import FavButton from './FavButton'

function MovieCard ({ movie }) {
  const { id, title, poster_path, vote_average } = movie
  return (
    <div className='movieCard'>
      <Link to={`/movie/${id}`}>
        <img
          className='moviePoster'
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt=''
        />
      </Link>
      <div className='movieCardFooter'>
        <div className='movieCardDetails'>
          <h2 className='movieCardTitle'>{title}</h2>
          <p className='movieCardRating'>{vote_average}</p>
        </div>
       <FavButton movie={movie}/>
      </div>
    </div>
  )
}

export default MovieCard
