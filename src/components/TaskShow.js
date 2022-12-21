import { useState } from 'react';
import TaskEdit from './TaskEdit';
import useTasksContext from '../hooks/use-tasks-context';
import { BsCheckCircle } from "react-icons/bs";
import { FiEdit3 } from "react-icons/fi";

const TaskShow = ({ task }) => {
  const [showEdit, setShowEdit] = useState(false);
  const [showButtons, setShowButtons] = useState(true);
  const { deleteTaskById } = useTasksContext();

  const handleDelete = () => {
    deleteTaskById(task.id);
  };

  const handleEdit = () => {
    setShowEdit(!showEdit);
    setShowButtons(!showButtons);
  };

  const handleSubmit = () => {
    setShowEdit(false);
    setShowButtons(true);
  }

  let content = <h3>{task.title}</h3>;
  let buttons = (
    <div className='actions'>
      <button className='button-secondary button-edit' onClick={handleEdit}><FiEdit3 /></button>
      <button className='button-secondary button-delete' onClick={handleDelete}><BsCheckCircle /></button>
    </div>
  );

  if (showEdit) {
    content = <TaskEdit onSubmit={handleSubmit} task={task} />
  }
  if (!showButtons) {
    buttons = (<div className='actions'></div>)
  }

  return (
    <div className='task__show'>
      <div className='content'>{content}</div>
      {buttons}
    </div>
  )
};

export default TaskShow;