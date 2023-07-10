import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { StateProvider } from './context';
import {ModalProvider} from "./context/ModalContext.jsx"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ModalProvider>
    <StateProvider>
    <App />
    </StateProvider>
    </ModalProvider>
  </React.StrictMode>,
)
