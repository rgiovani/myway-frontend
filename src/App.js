import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { PersistGate } from 'redux-persist/integration/react'

import { responsiveFontSizes } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'

import GlobalStyles from './assets/styles/global'
import global from './assets/styles/theme'
import Routes from './routes'
import { store, persistor } from './store'

function App() {
  const theme = responsiveFontSizes(global)
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router>
            <Routes />
            <GlobalStyles />
            <ToastContainer position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              closeOnClick
              pauseOnHover />
          </Router>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  )
}

export default App
