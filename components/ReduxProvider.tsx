// components/ReduxProvider.tsx

"use client";

// Import the Provider component from react-redux
import { Provider } from "react-redux";

// Import the store
import { store } from "@/lib/store";

// Define the props for the provider
interface ReduxProviderProps {
  children: React.ReactNode;
}

// Provide Redux store to your app
const ReduxProvider = ({ children }: ReduxProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
