import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './components/screens/Home/Home'
import './assets/styles/globals.scss'
import 'antd/dist/antd.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<Home />)
