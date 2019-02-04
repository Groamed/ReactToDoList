import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './redux/reducers'
import Contoller from './components/Contoller'
import { CssBaseline, MuiThemeProvider } from '@material-ui/core'
import { themes } from './themesStorage'
import { logger } from './redux/middlewares/logger'



const store = createStore(rootReducer, applyMiddleware(logger))

render(
    <React.Fragment>
        <MuiThemeProvider theme={themes.dark}>
            <CssBaseline />
            <Provider store={store}>
                <Contoller />
            </Provider>
        </MuiThemeProvider>
    </React.Fragment>,
    document.getElementById('root')
);