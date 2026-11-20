const routes = [
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

const editRoute = ({ id, info }) => {
  const updateRoutes = routes.map((route) => {
    // испоьзуем map чтобы поменять тот маршрут который нужно
    // а остальые оставить без. изменения
    console.log(route.id, id)
    if (route.id === id) {
      return info;
    } else {
      return route;
    }
  });
  console.log(updateRoutes)
};
editRoute({id: 2, info: {
  name: "Tokio - USA",
  date: "1996-01-24",
  distance: 30,
  level: "Средне",
  start: "Парк",
  description: "описание",
  id: 2,
}});
