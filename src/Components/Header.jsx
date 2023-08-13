import React from 'react'
import Wrapper from './Wrapper'
import {Link} from 'react-router-dom'
import logo from '../assets/logo.svg'
import SearchBox from './SearchBox'
import {useContext} from 'react'
import {AppContextData} from '../Context/Appcontext'
function Header() {

 const{state}= useContext(AppContextData)

  return (
    <header>
      <Wrapper>
        <div className="appHeader">
          <div className="headerLeft">
            <Link to={'/'} >
            <img src={logo}></img>
            </Link>
          </div>
          
            <Link to={'/favourites'}>
            <div className='favCount'>
                Favorites
                <span className="count"> <sup>{state?.favourite?.length} </sup></span>
          </div>
          </Link>
         <SearchBox/>
        </div>
      </Wrapper>
    </header>
  )
}

export default Header
