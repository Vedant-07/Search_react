//define the reducer function
const reducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true
            }
        case "GET_STORIES":
            return {

                ...state,
                isLoading: false,
                hits: action.payload.hits,
                nbPages: action.payload.nbPages
            }
        case "REMOVE_POST":
            return {
                ...state,
                hits: state.hits.filter(
                    (curElem) => curElem.objectID !== action.payload
                ),
            };
        case "SEARCH_POST":
            return {
                ...state,
                query: action.squery
            }
        case "NEXTPAGE":
            let pgnum=state.page+1;
            if(pgnum>=state.nbPages)
            pgnum=0;
            return{
                ...state,
                page:pgnum
            }
        case "PREVPAGE":
            let pageNum=state.page-1
            if(pageNum<1)
            pageNum=0;
            return{
                ...state,
                page:pageNum
            }
    }


    return state;
}

export default reducer;