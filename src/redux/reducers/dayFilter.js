const dayFilter = (state = 'none', action) => {
    switch (action.type) {
        case 'DAY_CHANGE': {
            return action.day
        }
        default: {
            return state
        }
    }
}

export default dayFilter