// File: lib/redux/taskSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the shape of a Task
export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

// Define the initial state structure
interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = {
  tasks: [],
};

// Create a slice for tasks
const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    // Action to set all tasks (e.g., from an API)
    setTasks: (state, action: PayloadAction<Task[]>) => {
      state.tasks = action.payload;
    },

    // Action to add a task
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },

    // Action to delete a task
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },

    // Action to toggle task completion
    toggleTask: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

// Export actions for use in components
export const { setTasks, addTask, deleteTask, toggleTask } = taskSlice.actions;

// Export reducer to be used in store setup
export default taskSlice.reducer;
