import { useState } from "react";
import DATA from "./data.json";
import styles from "./App.module.scss";
import FolderList from "./Components/FolderList/FolderList";
import TaskList from "./Components/TaskList/TaskList";
import { getId } from "./utils";

const App = () => {
    // STATES
    const [data, setData] = useState(DATA);
    const [selectedFolderId, setSelectedFolderId] = useState("");

    // SIDE EFFECTS

    // METHODS
    const updateSelectedFolder = ({ id }) => {
        setSelectedFolderId(id);
    };

    const updateFolder = (folder) => {
        const ind = data.findIndex((folder) => folder.id === selectedFolderId);
        const newData = [...data];
        newData[ind] = folder;
        setData(newData);
    };

    const updateTask = ({ taskId }) => {
        const folder = { ...selectedFolder };
        const taskList = folder.taskList.map((task) => {
            if (task.id === taskId) {
                return {
                    ...task,
                    isCompleted: !task.isCompleted,
                };
            }
            return task;
        });

        folder.taskList = taskList;
        updateFolder(folder);
    };

    const addFolder = () => {
        let name;
        while (true) {
            name = prompt("Folder Name");

            if (name === null) return;
            if (name !== "") break;

            alert("Cannot be empty");
        }
        const id = getId();
        const newFolder = {
            id,
            folderName: name,
            taskList: [],
        };

        const newData = [newFolder, ...data];
        setData(newData);
        updateSelectedFolder({ id });
    };

    const addTask = () => {
        let text;
        while (true) {
            text = prompt("Task Details [ press ESC to cancel ]");

            if (text === null) return;
            if (text !== "") break;

            alert("Cannot be empty");
        }

        const task = {
            id: getId(),
            text,
            isCompleted: false,
        };

        const folder = { ...selectedFolder };
        folder.taskList = [task, ...folder.taskList];
        updateFolder(folder);
    };

    // VARIABLES
    const folderList = data.map((folder) => {
        return {
            id: folder.id,
            folderName: folder.folderName,
        };
    });

    const selectedFolder = data.find(
        (folder) => folder.id === selectedFolderId
    );

    return (
        <>
            <div className={styles.leftContent}>
                <h2 className={styles.title}>Task Notes</h2>
                <button className={styles.addFolderButton} onClick={addFolder}>Add Folder</button>
                <FolderList
                    folderList={folderList}
                    selectedFolderId={selectedFolderId}
                    updateSelectedFolder={updateSelectedFolder}
                />
            </div>

            <div className={styles.rightContent}>
                {selectedFolderId && (
                    <>
                        <h1 className={styles.heading}>{selectedFolder.folderName}</h1>
                        <button className={styles.addTaskButton} onClick={addTask}>Add Task</button>
                        <TaskList
                            taskList={selectedFolder.taskList}
                            updateTask={updateTask}
                        />
                    </>
                )}
            </div>
        </>
    );
};
export default App;
