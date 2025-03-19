import React from "react";
import Item from "./Item";
import useStore from "../store/Store";

function Items() {
  const tasks = useStore((state) => state.tasks);
  const sortedTasks = [...tasks].sort((a,b) => 
    a.prioritised - b.prioritised);
  return (
    <section className="todo-items-container">
      {sortedTasks.map((currentTask) => (
        <Item
          id={currentTask.id}
          key={currentTask.id}
          title={currentTask.taskTitle}
          priority={currentTask.prioritised}
          description={currentTask.taskDescription}
          complete={currentTask.completed}
        />
      ))}
    </section>
  );
}

export default Items;
