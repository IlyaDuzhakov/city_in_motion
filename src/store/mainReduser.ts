import { EditActions } from "./actions/actionsMain"
interface MainStateType {
    isEdit: boolean,
    id: number | null,
}

const defaultState:MainStateType = {
    isEdit: false,
    id: null,
}

//@ts-ignore
export const mainReducer = (
    state: MainStateType = defaultState, 
    action: EditActions 
) => {
    switch(action.type) {
        case "ON_EDIT":
        return {
            isEdit: true,
            id: action.payload 
        }
        case "OFF_EDIT":
            return {
                isEdit: false,
                id: null
            }
        default:
            return state
    }
}

// reduser принимает state and action и возвращает 
// измененное состояние