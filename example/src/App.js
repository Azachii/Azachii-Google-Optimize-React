import React from 'react'
import { Experiment } from 'azachii-google-optimize-react'

const App = () => {
  return (
    <div>
      <Experiment id="xxxxxxx">
        {(experiment) => {
          return null
        }}
      </Experiment>
    </div>
  )
}

export default App
