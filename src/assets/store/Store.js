import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
const Store = (set) => ({
  tasks: [],

  addTask: (task) => {
    set((previousState) => {
      return { tasks: [task, ...previousState.tasks] };
    });
  },

  completeTask: (taskId) => {
    set((state) => {
      const updatedTasks = state.tasks.map((currentTask) => {
        if (currentTask.id == taskId) currentTask.completed = true;
        return currentTask;
      });
      return { tasks: updatedTasks };
    });
  },

  highPriorityTask: (taskId) => {
    set((state) => {
        const updatedTasks = state.tasks.map((currentTask) => {
            if(currentTask.id == taskId) currentTask.prioritised = true;
            return currentTask;
        });
        return {tasks: updatedTasks};
    });
  },

  lowPriorityTask: (taskId) => {
    set((state) => {
        const updatedTasks = state.tasks.map((currentTask)  => {
            if(currentTask.id == taskId) currentTask.prioritised = false;
            return currentTask;
        });
        return {tasks: updatedTasks};
    });
  },

  incompleteTask: (taskId) => {
    set((state) => {
      const updatedTasks = state.tasks.map((currentTask) => {
        if (currentTask.id == taskId) currentTask.completed = false;
        return currentTask;
      });
      return { tasks: updatedTasks };
    });
  },

  deleteTask: (taskId) => {
    set((state) => {
      const updatedTasks = state.tasks.filter(
        (currentTask) => currentTask.id !== taskId,
      );
      return { tasks: updatedTasks };
    });
  },
});


const useStore = create(devtools(persist(Store, { name: "tasks" })));
export default useStore;
