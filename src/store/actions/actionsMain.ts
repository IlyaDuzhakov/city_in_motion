// export type MainType = string

const ON_EDIT = "ON_EDIT"
const OFF_EDIT = "OFF_EDIT"

type OnEditAction = {
    type: typeof ON_EDIT,
    payload: number, 
}
type OffEditAction = {
    type: typeof OFF_EDIT,
}

export type EditActions = OnEditAction | OffEditAction

// при редактировании нам нужно знать к какой конкретной карточке
// мы обращаемся поэтому нужен payload в котором указывается id