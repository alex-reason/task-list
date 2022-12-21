import useTasksContext from '../hooks/use-tasks-context';
import TaskShow from './TaskShow';

const TaskList = () => {
  const { tasks } = useTasksContext();
  const renderedTasks = tasks.map(task => {
    return <TaskShow key={task.id} task={task} />
  });

  return (
    <div className='task__list'>
      {renderedTasks}
    </div>
  )
};

export default TaskList;