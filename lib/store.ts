// lib/store.ts

// Import the configureStore function from Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";

// Import the task reducer from your taskSlice
import taskReducer from "./Redux/taskSlice";

// Create the Redux store and register the task reducer
export const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

// Define RootState and AppDispatch types for usage across the app
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;