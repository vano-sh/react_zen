import * as ReactDOMClient from 'react-dom/client' 
import App from './App'
import './scss/index.scss'

const $root = document.querySelector('#root')
const root = ReactDOMClient.createRoot($root)

root.render(<App/>)