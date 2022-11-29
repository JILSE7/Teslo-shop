import { FC, ReactNode, useReducer } from 'react';
import { ICartProduct } from 'interfaces';
import { CartContext, cartReducer } from './';


export interface ICartState {
    cart: ICartProduct[];
}


const CART_INITIAL_STATE: ICartState = {
    cart: []
}

export const CartProvider:FC<{children:ReactNode}> = ({children}) => {

    const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);


    return (
        <CartContext.Provider value={{...state }}>
            {
                children
            }
        </CartContext.Provider>
    )
}