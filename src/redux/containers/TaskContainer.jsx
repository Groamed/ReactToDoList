import { connect } from 'react-redux'
import { completeTask, startEditTask, endEditTask, deleteTask } from '../actions'
import TaskElement from '../../components/TaskElement';

const mapDispatchToProps = (dispatch, ownProps) => ({
    completeTask: (day = ownProps.day, id = ownProps.id) => dispatch(completeTask(day, id)),
    startEditTask: (day = ownProps.day, id = ownProps.id) => dispatch(startEditTask(day, id)),
    endEditTask: (replace, day = ownProps.day, id = ownProps.id) => dispatch(endEditTask(day, id, replace)),
    deleteTask: (day = ownProps.day, id = ownProps.id) => dispatch(deleteTask(day, id))
})

export default connect(null, mapDispatchToProps)(TaskElement)