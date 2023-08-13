
export const initialState ={
    page: 1,
    favourite:[],
}

export const reducer =(state,{type,payload})=>{

switch (type){
    case "Add_To_Cart" :
    return {...state, favourite:[...state.favourite,payload]}

    case "Remove_Cart" :
    return {...state,favourite:[...state.favourite.filter((item)=>item.id!==payload)]}

    case "NEXT_PAGE":
        return { ...state, page: state.page + 1 };

    case "PREV_PAGE":
        return { ...state, page: state.page - 1 };
     default:
       return state;

}
}