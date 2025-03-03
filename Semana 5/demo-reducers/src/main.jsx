import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToDoApp } from './ToDoApp.jsx'
import { ToDoContext } from './context/ToDoContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToDoContext>
      <ToDoApp />
    </ToDoContext>
  </StrictMode>,
)
