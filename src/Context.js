//context api  creation
//context reation
//provider
//consumer here uses usecontext hook
import React, { useContext, useReducer, useEffect } from "react"
import reducer from "./reducer"


let API = "https://hn.algolia.com/api/v1/search?"

const initialState = {
    isLoading: true,
    query: "css",
    nbPages: 0,
    page: 0,
    hits: []
}
const AppContext = React.createContext()

//create provider function
const AppProvider = ({ children }) => {
    //now using usereducer
    //dispatch triggers inside reducer function

    const [state, dispatch] = useReducer(reducer, initialState)



    const fetchAPIdata = async (url) => {

        dispatch({
            type:"SET_LOADING"
        })
        try {
            const res = await fetch(url)
            const data = await res.json()
            console.log(data)
            //dispatching
            dispatch({
                type: "GET_STORIES",
                payload: {
                    hits: data.hits,
                    nbPages: data.nbPages,
                }
            })
            //isLoading=false
        } catch (error) {
            console.log('hereis the error at fetchApidata')
            console.log(error);
        }
    }

    //to call api  funtion
    const searchPost=(searchQuery)=>{
        dispatch({
            type:"SEARCH_POST",
            squery:searchQuery
        })
    }

    //to remove post
    const removePost=(post_ID)=>{
        dispatch({type:"REMOVE_POST",payload:post_ID})
    }

    //pagination

    const getNextPage=()=>{
        dispatch({type:"NEXTPAGE"})
    }

    const getPrevPage=()=>{
        dispatch({type:"PREVPAGE"})
    }

    useEffect(() => {
        fetchAPIdata(`${API}query=${state.query}&page=${state.page}`)
    }, [state.query,state.page])


    return (
        <AppContext.Provider value={{...state,removePost,searchPost,getNextPage,getPrevPage}}>
            {children}
        </AppContext.Provider>
    )
}
//custom hook creation,should start from use as it returning hoks

const useGlobalContext = () => {
    return useContext(AppContext)
}
export { AppContext, AppProvider, useGlobalContext }