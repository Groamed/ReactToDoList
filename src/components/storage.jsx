import React from 'react'
import { createMuiTheme } from '@material-ui/core/styles'

export const FuncsContext = React.createContext({
    editTask: () => { },
    deleteTask: () => { }
})

export const themes = {
    dark: createMuiTheme({
        palette: {
            primary: {
                light: '#6d6d6d',
                main: '#424242',
                dark: '#1b1b1b',
                contrastText: '#fff',
            },
            secondary: {
                light: '#5472d3',
                main: '#0d47a1',
                dark: '#002171',
                contrastText: '#fff',
            },
            error: {
                light: "#e57373",
                main: "#f44336",
                dark: "#d32f2f",
                contrastText: "#fff",
            },
            background: {
                default: '#1b1b1b'
            },
            text: {
                primary: "#fff",
                secondary: "rgba(255, 255, 255, 0.7)"
            }
        },
        typography: {
            useNextVariants: true,
        },
    })
}