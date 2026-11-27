import { routeReducer } from "./routeReducer";
import {combineReducers, createStore} from 'redux'
import { mainReducer } from "./mainReduser";

const rootReducer = combineReducers({
    main:mainReducer, 
    route: routeReducer
}) 

export const store = createStore(rootReducer)



export type AppDispatch = typeof store.dispatch
// этот тип будет содержать информацию о действиях которые мы описали внутри routeReduser
// typeof store.dispatch - узнаем все действия которые доступны для 
//нашего store
