import React from 'react'
import ReactDOM from 'react-dom'
import Contoller from './components/Contoller'
import { CssBaseline } from '@material-ui/core'
//import { themes } from './components/storage'

ReactDOM.render(
    <React.Fragment>
            <CssBaseline />
            <Contoller />
    </React.Fragment>,
    document.getElementById('root')
);