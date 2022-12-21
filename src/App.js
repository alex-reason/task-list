import TaskCreate from './components/TaskCreate';
import TaskList from './components/TaskList';

const App = () => {
    return (
        <div className='task'>
            <h1>Task List</h1>
            <TaskCreate />
            <TaskList />
        </div>
    )
};
export default App;