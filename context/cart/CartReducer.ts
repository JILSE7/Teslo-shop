import { ICartProduct } from "interfaces";
import { ICartState } from "./CartProvider";

type Actions = {type: '[CART] - LoadCart from cookies | storage', payload: ICartProduct[]} 
| {type: 'Close'};



export const cartReducer = (state:ICartState, action:Actions):ICartState => {

       switch (action.type) {
        case 'Close': {
            return state;
        }
        default:
           return state
      }
};