import { connect } from 'react-redux'
import { addTask, clearAll } from '../actions'
import TaskAddBar from '../../components/TaskAddBar'

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addTask: (id, task, day = ownProps.day) => dispatch(addTask(day, id, task)),
        clearAll: (day = ownProps.day) => dispatch(clearAll(day))
    }
}

export default connect(null, mapDispatchToProps)(TaskAddBar)