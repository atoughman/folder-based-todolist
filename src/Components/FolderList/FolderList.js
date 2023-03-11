import classNames from "classnames";
import Folder from "./Folder/Folder";
import styles from "./FolderList.module.scss";

let FolderList = (props) => {
    const { folderList, selectedFolderId, updateSelectedFolder } = props;

    const folderListClasses = classNames({
        [styles.folderList]: true,
        [styles.showScroll]: true,
    });

    const renderableFolderList = folderList.map((folder) => {
        const isSelected = folder.id === selectedFolderId;

        return (
            <Folder
                key={folder.id}
                id={folder.id}
                name={folder.folderName}
                isSelected={isSelected}
                handleFolderClick={updateSelectedFolder}
            />
        );
    });

    return <div className={folderListClasses}>{renderableFolderList}</div>;
};

export default FolderList;
