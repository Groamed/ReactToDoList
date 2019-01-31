import { combineReducers } from 'redux'
import tasks from './tasks'
import dayFilter from './dayFilter'
import modalRuler from './modalRuler'

export default combineReducers({
    tasks,
    dayFilter,
    modalRuler
})