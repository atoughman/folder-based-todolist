import classNames from "classnames";
import Task from "./Task/Task";
import styles from "./TaskList.module.scss";

const TaskList = (props) => {
    const { taskList, updateTask } = props;

    const taskListClasses = classNames({
        [styles.taskList]: true,
        [styles.showScroll]: true
    })

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
    return <div className={taskListClasses}>{renderableTaskList}</div>;
};

export default TaskList;
