import React from 'react'
import ReactDOM from 'react-dom'

import { App } from './app.js'
import './styles.css'

const container = document.createElement('div')
container.id = "root"
document.body.appendChild(container)

const root = ReactDOM.createRoot(container)

root.render(<App />)
