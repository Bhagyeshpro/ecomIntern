export const initialState = {
    basket: [],
}

function reducer(state, action) {
    switch(action.type) {
        case "ADD_TO_BASKET": 
            return {
                ...state
            }
            break;
        case "REMOVE_FROM_BASKET":
            return {
                ...state
            }
            break;
        default:
            return state;
    }
}

export default reducer;