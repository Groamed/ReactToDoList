export const addTask = (day, id, task) => ({
    type: 'ADD_TASK',
    day,
    id,
    task
})

export const completeTask = (day, id) => ({
    type: 'COMPLETE_TASK',
    day,
    id
})

export const startEditTask = (day, id) => ({
    type: 'START_EDIT_TASK',
    day,
    id
})

export const endEditTask = (day, id, replace) => ({
    type: 'END_EDIT_TASK',
    day,
    id,
    replace
})

export const deleteTask = (day, id) => ({
    type: 'DELETE_TASK',
    day,
    id
})

export const clearAll = day => ({
    type: 'FULL_CLEAR',
    day
})

export const days = {
    MONDAY: 'Monday',
    TUESDAY: 'Tuesday',
    WEDNESDAY: 'Wednesday',
    THURSDAY: 'Thursday',
    FRIDAY: 'Friday',
    SATURDAY: 'Saturday',
    SUNDAY: 'Sunday'
}

export const changeDay = day => ({
    type: 'DAY_CHANGE',
    day
})

export const openModal = day => ({
    type: 'OPEN_MODAL',
    day
})

export const closeModal = day => ({
    type: 'CLOSE_MODAL',
    day
})