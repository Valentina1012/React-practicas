import React from "react"
import ReactDOM from "react-dom/client"
import { App } from "./App.jsx"
import "./index.css"
// import App from './App.jsx'
// import './index.css'

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <App /> //Cuando un componente no envuelve nada se escribe con / antes de terminar la etiqueta
);
