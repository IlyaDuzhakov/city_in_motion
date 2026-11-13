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

const defaulfRoutes: RouteType[] = [
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

let initialState: RouteType[] 
 // JSON.parse(localStorage.getItem("addRoutes") || "") || defaulfRoutes;
// || "" обработали ситуацию если ключа в localStorage не будет

const localRoutes = localStorage.getItem('addRoutes')

if (localRoutes) {
  initialState = JSON.parse(localRoutes)
}
else {
  initialState = defaulfRoutes
}

// мы проверяем что в localStorage есть даные и только после этого
// их парсим чтобы избежать ошибки при выполнении JSON.parse

//@ts-ignore
export const routeReducer = (
  state: RouteType[] = initialState,
  action: RoutesAction,
) => {
  switch (action.type) {
    case "ADD_ROUTE":
      localStorage.setItem(
        "addRoutes",
        JSON.stringify([...state, action.payload]),
      );
      // мы можем работать с localStorage прямо из REDUX
      return [...state, action.payload];
    case "GET_ROUTES":
      return [...state];
    // в случае добавления маршрута мы возвращаем массив
    // в который разворачиваем старое состояние ( все маршруты которые были)
    // и добавляем action.payload - новый маршрут
    case "DELETE_ROUTE":
      const filterRoutes = [...state.filter((route)=> route.id !== action.payload)]
      localStorage.setItem('addRoutes', 
        JSON.stringify(filterRoutes)
      )
      return filterRoutes


      // [...state.filter((route)=> route.id !== action.payload)] cоздаем
      // новый массив в который добавляем все маршруты кроме того который 
      // хотим удалить

    default:
      return state;
  }
};

// у action есть type - обязательный (что нужно сделать)
// и payload - данные, которые будут использоваться для изменения состояния
// не обязательный параметр
