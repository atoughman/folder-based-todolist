import Folder from "./Folder/Folder";

let FolderList = (props) => {
    const { folderList, selectedFolderId, updateSelectedFolder } = props;

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

    return renderableFolderList;
};

export default FolderList;
