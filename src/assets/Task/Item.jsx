import React from "react";
import useStore from "../store/Store";

function Item({ id, title, priority, description, complete }) {
  const completeTask = useStore((state) => state.completeTask);
  const incompleteTask = useStore((state) => state.incompleteTask);
  const deleteTask = useStore((state) => state.deleteTask);
  const highPriorityTask = useStore((state) => state.highPriorityTask);
  const lowPriorityTask = useStore((state) => state.lowPriorityTask);

  const handleMarkAsDone = (e) => {
    e.preventDefault();
    completeTask(id);
  };

  const handleHighPriority = (e) => {
    e.preventDefault();
    highPriorityTask(id);
  }

  const handleLowPriority  = (e) => {
    e.preventDefault();
    lowPriorityTask(id);
  }


  const handleMarkIncomplete = (e) => {
    e.preventDefault();
    incompleteTask(id);
  };

  const handleDeleteTask = (e) => {
    e.preventDefault();
    deleteTask(id);
  };

  return (
    <div className="todo-item">
      <h3 className={complete ? `todo-title complete` : `todo-title`}>
        {title}
      </h3>
      <p className={complete ? `complete` : ``}>{description}</p>
      <div className="prioritize-task">
      <p className="set-priority">Set Priority:</p>
      <button className={priority ? `low-priority` : `high-priority` } onClick={priority ? handleLowPriority :handleHighPriority }>
        {priority ? `low priority` : `high priority`}
      </button>
      </div>
      <div className="todo-item__controls">
        <button onClick={complete ? handleMarkIncomplete : handleMarkAsDone}>
          {complete ? `mark as incomplete` : `mark as done`}
        </button>
        <button className="delete-btn" onClick={handleDeleteTask}>
          delete
        </button>
      </div>
    </div>
  );
}

export default Item;
