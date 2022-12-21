import { createContext, useState } from 'react';

const TasksContext = createContext();

const Provider = ({ children }) => {
    const [tasks, setTasks] = useState([]);


    // edit a task
    const editTaskById = (id, newTitle) => {
        let editedTask = tasks.find(elem => elem.id === id);
        editedTask.title = newTitle;

        const updatedTasks = tasks.map(task => {
            if (task.id === id) {
                return { ...task, ...editedTask };
            };

            return task;
        });

        setTasks(updatedTasks);
    };

    // delete a task
    const deleteTaskById = (id) => {
        const updatedTasks = tasks.filter(task => {
            return task.id !== id;
        });

        setTasks(updatedTasks);
    };

    // create a task
    const createTask = (title) => {
        let randomId = Math.floor(Math.random() * 9999);
        let newTask = { title, id: randomId };
        const updatedTasks = [...tasks, newTask];

        setTasks(updatedTasks);
    };

    // values to pass down via context provider
    const valueToShare = {
        tasks,
        deleteTaskById,
        editTaskById,
        createTask,
    };

    return (
        <TasksContext.Provider value={valueToShare}>
            {children}
        </TasksContext.Provider>
    )
};

export { Provider };
export default TasksContext;