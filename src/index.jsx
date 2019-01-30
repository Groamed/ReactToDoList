import React from 'react'
import ReactDOM from 'react-dom'
import Contoller from './components/Contoller'
import { CssBaseline, MuiThemeProvider } from '@material-ui/core'
import { themes } from './components/storage'

ReactDOM.render(
    <React.Fragment>
        <MuiThemeProvider theme={themes.dark}>
            <CssBaseline />
            <Contoller />
        </MuiThemeProvider>
    </React.Fragment>,
    document.getElementById('root')
);