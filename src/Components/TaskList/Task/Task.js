import classNames from "classnames";
import styles from "./Task.module.scss";

const Task = (props) => {
    const { text, id, isCompleted, updateTask } = props;

    const textClasses = classNames({
        [styles.strike]: isCompleted,
    });
    return (
        <div onClick={() => updateTask({ taskId: id })}>
            <input type="checkbox" name="" id="" checked={isCompleted}/>
            <div className={textClasses}>{text}</div>
        </div>
    );
};

export default Task;
