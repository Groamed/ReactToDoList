import { connect } from 'react-redux'
import TaskList from '../../components/TaskList';

function filterTasks(tasks, day) {
    return tasks.filter(elem => elem.day === day)
}

const mapStateToProps = (state, ownProps) => ({
    tasks: filterTasks(state.tasks, ownProps.day)
})

export default connect(mapStateToProps)(TaskList)