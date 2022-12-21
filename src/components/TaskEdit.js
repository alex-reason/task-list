import { useState } from 'react';
import useTasksContext from '../hooks/use-tasks-context';

const TaskEdit = ({ task, onSubmit }) => {
  const [title, setTitle] = useState(task.title);
  const { editTaskById } = useTasksContext();

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
    editTaskById(task.id, title);
  }

  return (
    <form onSubmit={handleSubmit} className='task__edit'>
      <input
        className='input'
        value={title}
        onChange={handleChangeTitle}
      />
      <button className='button-primary'>
        Save
      </button>
    </form>
  )
};

export default TaskEdit;