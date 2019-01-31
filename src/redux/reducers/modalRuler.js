const modalRuler = (state = { day: '', opened: false }, action) => {
    switch (action.type) {
        case 'OPEN_MODAL': {
            return { day: action.day, opened: true }
        }
        case 'CLOSE_MODAL': {
            return { day: action.day, opened: false }
        }
        default: {
            return state
        }
    }
}

export default modalRuler