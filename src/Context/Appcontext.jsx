import React from 'react'
import { initialState,reducer } from '../Reducer/Appreducer'
import { createContext,useReducer } from 'react'


export const AppContextData=createContext()

function Appcontext({children}) {
const [state, dispatch] = useReducer(reducer, initialState)
const reducerData={state,dispatch}
  return (
    <AppContextData.Provider value={reducerData}>
     {children}
    </AppContextData.Provider>
  )
}

export default Appcontext