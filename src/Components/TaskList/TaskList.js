import Task from "./Task/Task";

const TaskList = (props) => {
    const { taskList, updateTask } = props;
    const renderableTaskList = taskList.map((task) => {
        return (
            <Task
                key={task.id}
                id={task.id}
                text={task.text}
                isCompleted={task.isCompleted}
                updateTask={updateTask}
            />
        );
    });
    return renderableTaskList;
};

export default TaskList;
