const tasks = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TASK': {
            return [
                ...state,
                {
                    day: action.day,
                    id: action.id,
                    task: action.task,
                    completed: false,
                    edited: false
                }
            ]
        }
        case 'COMPLETE_TASK': {
            return state.map(elem => {
                if (elem.id === action.id && elem.day === action.day) {
                    elem.completed = true
                }
                return elem
            })
        }
        case 'START_EDIT_TASK': {
            return state.map(elem => {
                if (elem.id === action.id && elem.day === action.day) {
                    elem.edited = true
                }
                return elem
            })
        }
        case 'END_EDIT_TASK': {
            return state.map(elem => {
                if (elem.id === action.id && elem.day === action.day) {
                    elem.task = action.replace
                    elem.edited = false
                }
                return elem
            })
        }
        case 'DELETE_TASK': {
            return state.filter(elem => elem.id !== action.id || elem.day !== action.day)
        }
        case 'FULL_CLEAR': {
            return state.filter(elem => elem.day !== action.day)
        }
        default: {
            return state
        }
    }
}

export default tasks