# azachii-google-optimize-react

> Implementación de Google Optimize para React

[![NPM](https://img.shields.io/npm/v/azachii-google-optimize-react.svg)](https://www.npmjs.com/package/azachii-google-optimize-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Instalación
---

```bash
npm install --save azachii-google-optimize-react
```

## Uso
---

### GoogleOptimizeProvider
---

Es necesario envolver tu aplicación en un GoogleOptimizeProvider debido a que de esta forma agregamos el script de googletagmanager a la cabecera del documento e inicializamos Optimize.

```jsx
import React from 'react'
import { GoogleOptimizeProvider } from 'azachii-google-optimize-react'
import MainApp from './App'

const App = () => (
  <GoogleOptimizeProvider
    analytics="Key de Analytics"
    optimize="Key de Optimize"
  >
    <MainApp />
  </GoogleOptimizeProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))
```

### Experiment
---

Recibe como children una función para poder tener acceso a la variante y a un loading.

* variant -> String
* loading -> Boolean

```jsx
import React, { useContext } from 'react'
import { Experiment } from 'azachii-google-optimize-react'

const HomePage = () => {
  return (
    <Experiment id="Id del experimentoo">
      {({ variant, loading }) => {
        if (!loading) {
          switch(variant) {
            case "0": return <p>Original</p>
            case "1": return <p>Variante 1</p>
            case "2": return <p>Variante 2</p>
          }
        }
        return null
      }}
    </Experiment>
  )
}
```

## Licencia

MIT © [Azachii](https://azachii.digital/)
