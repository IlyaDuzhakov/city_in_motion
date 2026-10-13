


export interface RouteType {
    name: string;
    date: string;
    distance: number;
    level: "Легко" | "Средне" | "Сложно";
    start: string;
    description: string;
    id: number;
}

const initialState:RouteType[] = [
    {
    name: "Moscow - Pekin",
    date: "1991-03-25",
    distance: 10,
    level: "Легко",
    start: 'Парк',
    description: 'описание',
    id: 1,
    },
    {
    name: "Moscow - London",
    date: "1995-01-24",
    distance: 20,
    level: "Легко",
    start: 'Парк',
    description: 'описание',
    id: 2,
    }
]

//@ts-ignore
export const routeReducer = (state:RouteType[]=initialState, action) => {
    switch (action.type) {

        default: 
        return state
    }
}