import classNames from "classnames";
import styles from "./Folder.module.scss";

let Folder = (props) => {
    const { id, name, isSelected, handleFolderClick } = props;
    const folderClasses = classNames({
        [styles.folder]: true,
        [styles.active]: isSelected,
    });

    return (
        <div
            className={folderClasses}
            onClick={() => handleFolderClick({ id })}
        >
            {name}
        </div>
    );
};

export default Folder;
