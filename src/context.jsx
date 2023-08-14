import { createContext, useContext, useState } from "react";

const globalContext = createContext();
// create custom hook
export const useGlobalContext = () => useContext(globalContext);

const AppContext = (props) => {
  // state
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [pageId, setPageId] = useState(null);

  // functionality
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <globalContext.Provider
      value={{ isSidebarOpen, openSidebar, closeSidebar, pageId, setPageId }}
    >
      {props.children}
    </globalContext.Provider>
  );
};

export default AppContext;
