import React from 'react'
import {useContext} from 'react'
import {AppContextData} from '../Context/Appcontext'
import heartLined from '../assets/heartlined.svg'
import heartFilled from '../assets/heartfilled.svg'
 

function FavButton({movie}) {
    const {state,dispatch} = useContext(AppContextData)

    let favouriteItems= state.favourite.some((item)=>item.id===movie.id)


    console.log("statw",state)
    const handleClick = () =>{
    
        favouriteItems?
        dispatch ({
          type :"Remove_Cart",
          payload:movie.id
       }) :
     
        dispatch ({
            type :"Add_To_Cart",
            payload:movie
         })
        
    }
   
  return (
    <div>
     
         <div className='favButton' onClick={handleClick}>
         {favouriteItems?
          <img  src={heartFilled}></img>:
          <img  src={heartLined}></img>
         }
        </div>
    
    </div>
  )
}

export default FavButton