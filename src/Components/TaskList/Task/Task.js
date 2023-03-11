import classNames from "classnames";
import styles from "./Task.module.scss";

const Task = (props) => {
    const { text, id, isCompleted, updateTask } = props;

    const textClasses = classNames({
        [styles.strike]: isCompleted,
    });

    const tooltip = `Click to mark as ${
        isCompleted ? "not complete" : "complete"
    }`;

    return (
        <div
            className={styles.task}
            onClick={() => updateTask({ taskId: id })}
            title={tooltip}
        >
            <input
                className={styles.checkbox}
                type="checkbox"
                name=""
                id=""
                checked={isCompleted}
            />
            <div className={textClasses}>{text}</div>
        </div>
    );
};

export default Task;
