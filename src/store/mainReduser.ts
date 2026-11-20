interface MainStateType {
    isEdit: boolean,
}

const defaultState:MainStateType = {
    isEdit: false,
}

//@ts-ignore
export const mainReducer = (
    state: MainStateType = defaultState, 
    // action
) => {

}