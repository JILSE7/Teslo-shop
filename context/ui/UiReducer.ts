import { IUi } from './UiProvider';

type Actions = {type: '[UI] - ToogleMenu'} | {type: 'Close'};


export const uiReducer = (state:IUi, action:Actions):IUi => {

       switch (action.type) {
        case '[UI] - ToogleMenu':
             return {
                ...state,
               isMenuOpen: !state.isMenuOpen
             }

        case 'Close': 
           return {
               ...state,
               isMenuOpen: false
        }

        default:
           return state
      }
};