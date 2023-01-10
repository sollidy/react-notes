import 'antd/dist/reset.css'
import ReactDOM from 'react-dom/client'

import './assets/styles/globals.scss'
import { Home } from './components/screens/Home'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<Home />)
