import { routeReducer } from "./routeReducer";
import {createStore} from 'redux'

export const store = createStore(routeReducer)

export type AppDispatch = typeof store.dispatch
// этот тип будет содержать информацию о действиях которые мы описали внутри routeReduser
// typeof store.dispatch - узнаем все действия которые доступны для 
//нашего store
