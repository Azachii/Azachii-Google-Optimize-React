import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { GoogleOptimizeProvider } from 'azachii-google-optimize-react'

ReactDOM.render(<GoogleOptimizeProvider analytics="UA-162224506-1" optimize="GTM-TNW88D2"><App /></GoogleOptimizeProvider>, document.getElementById('root'))
