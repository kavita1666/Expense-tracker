/* eslint-disable react/prop-types */
import "../App.css";

export const ContextMenu = ({ contextMenuPosition, setContextMenuPosition, handleDeleteExpense }) => {
  if (!contextMenuPosition?.left) return;

  return (
    <div className="context-menu" style={{ ...contextMenuPosition }}>
      <div onClick={() => {
        setContextMenuPosition({});
      }}>Edit</div>
      <div
        onClick={() => {
          setContextMenuPosition({});
          handleDeleteExpense();
        }}
      >
        Delete
      </div>
    </div>
  );
};
