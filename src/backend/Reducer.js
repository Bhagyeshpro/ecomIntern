export const initialState = {
    basket: [],
    user: null,
}

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item)  => item.price + amount, 0);

function reducer(state, action) {
    // console.log(action);
    switch(action.type) {

        case "ADD_TO_BASKET": 
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
            break;
        case "REMOVE_FROM_BASKET":
            // We cloned the basket here
            let newBasket = [...state.basket];

            // Finding index of item to be removed
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            )

            if(index >= 0) {
                // item exist now remove it
                newBasket.splice(index, 1);
            } else {
                console.warn(`Can't remove item with id ${action.id} as it is not present`);
            }
                
            return {
               ...state,
               basket: newBasket
            }
            break;
        default:
            return state;
    }
}

export default reducer;