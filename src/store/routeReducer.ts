import { RoutesAction } from "./actions/actionsRoute";

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

const initialState: RouteType[] = [
  {
    name: "Moscow - Pekin",
    date: "1991-03-25",
    distance: 10,
    level: "Легко",
    start: "Ростокинский акведук",
    description: "Спокойный маршрут вдоль воды и парков. Утро без спешки.",
    id: 1,
  },
  {
    name: "Moscow - London",
    date: "1995-01-24",
    distance: 20,
    level: "Средне",
    start: "Парк",
    description: "описание",
    id: 2,
  },
];

//@ts-ignore
export const routeReducer = (
  state: RouteType[] = initialState,
  action: RoutesAction,
) => {
  switch (action.type) {
    case "ADD_ROUTE":
      localStorage.setItem('addRoutes', JSON.stringify([...state, action.payload]))
      // мы можем работать с localStorage прямо из REDUX
      return [...state, action.payload];
    case "GET_ROUTES":
      return [...state]
// в случае добавления маршрута мы возвращаем массив 
// в который разворачиваем старое состояние ( все маршруты которые были)
// и добавляем action.payload - новый маршрут

    default:
      return state;
  }
};

// у action есть type - обязательный (что нужно сделать)
// и payload - данные, которые будут использоваться для изменения состояния
// не обязательный параметр
