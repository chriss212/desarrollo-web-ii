import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { CounterApp } from './useState/CounterApp.jsx'
import CounterAppWithCustomHooks from './useState/CounterAppWithCustomHooks.jsx'
import SimpleForm from './useEffect/SimpleForm.jsx'
import SimpleFormWithCustomHook from './useEffect/SimpleFormWithCustomHook.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <SimpleFormWithCustomHook/>
  // </StrictMode>,
)
