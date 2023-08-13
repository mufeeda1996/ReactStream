import React from 'react'
import {AppContextData} from '../Context/Appcontext'
import {useContext} from 'react'


function Pagination({page, total_pages}) {
  const {state,dispatch} = useContext(AppContextData)
  
    function handleClickNext(){
      dispatch({
        type: "NEXT_PAGE",
      });
    }

    function handleClicPrev(){
      dispatch({
        type: "PREV_PAGE",
      });
    }
    

  return (
    <div className='pagination'>
    <button disabled={page<=1} onClick={handleClicPrev}>prev</button>
    <button > {page} out of {total_pages}</button>
    <button onClick={handleClickNext}>next</button>
    </div>
  )
}

export default Pagination 