

export type LevelType = "Легко" | "Средне" | "Сложно"; 
export interface RouteType {
    name: string;
    date: string;
    distance: number;
    level: LevelType;
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
    start: 'Ростокинский акведук',
    description: 'Спокойный маршрут вдоль воды и парков. Утро без спешки.',
    id: 1,
    },
    {
    name: "Moscow - London",
    date: "1995-01-24",
    distance: 20,
    level: "Средне",
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