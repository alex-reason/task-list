import { useState } from 'react';
import useTasksContext from '../hooks/use-tasks-context';

const TaskCreate = () => {
    const [title, setTitle] = useState('');
    const { createTask } = useTasksContext();

    const handleChange = (event) => {
        setTitle(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        createTask(title);
        setTitle('');
    }

    return (
        <div className='task__create'>
            <h3>Add a Task</h3>
            <form onSubmit={handleSubmit}>
                <input value={title} onChange={handleChange} type="text" placeholder="type task" />
                <button className='button-primary'>Create!</button>
            </form>
        </div>
    )
}

export default TaskCreate;