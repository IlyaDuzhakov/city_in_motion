import React from "react";
import { store } from "./store";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./i18n";
import { Provider } from "react-redux";

// в React — это специальный компонент из Context API, 
// который позволяет передавать данные вниз по дереву 
// компонентов напрямую, минуя ручную передачу через props 
// на каждом промежуточном уровне. Он решает проблему так 
// называемого «прокидывания пропсов» (prop drilling)

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
