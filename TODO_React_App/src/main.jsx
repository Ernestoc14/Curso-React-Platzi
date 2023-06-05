import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/index.jsx'
import { ToDoProvider } from './ToDoContext/ToDoContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToDoProvider>
      <App />
    </ToDoProvider>
  </React.StrictMode>,
)
