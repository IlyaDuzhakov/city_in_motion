import { RouteType } from "../routeReducer"

const ADD_ROUTE = "ADD_ROUTE"
const EDIT_ROUTE = "EDIT_ROUTE"
const DELETE_ROUTE = "DELETE_ROUTE"
const GET_ROUTES = "GET_ROUTES"

type AddRouteAction = {
    type: typeof ADD_ROUTE,
    payload: RouteType 
}

type EditRouteAction = {
    type: typeof EDIT_ROUTE,
    payload: number
    // id type number
}

type DeleteRouteAction = {
    type: typeof DELETE_ROUTE,
    payload: number
}

type GetRoutesAction = {
    type: typeof GET_ROUTES,
}

export type RoutesAction = AddRouteAction | EditRouteAction | DeleteRouteAction | GetRoutesAction