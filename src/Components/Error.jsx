import React from 'react'

function Error({children}) {
  return (
    <div className='errorMessage'>{children}</div>
  )
}

export default Error