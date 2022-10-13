import { FC, ReactNode, useReducer } from 'react';
import { UiContext, uiReducer } from './';


export interface IUi {
    isMenuOpen: boolean;
}


const UI_INITIAL_STATE:IUi = {
    isMenuOpen: false
}


export const UiProvider:FC<{children:ReactNode}> = ({children}) => {

    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);
    // Methods
    const toggleSideMenu = () => dispatch({type: '[UI] - ToogleMenu'});

    return (
        <UiContext.Provider value={{...state, toggleSideMenu }}>
            {
                children
            }
        </UiContext.Provider>
    )
}