import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Navbar
        open={sidebarOpen}
        onMenuClick={() => setSidebarOpen(true)}
        onCloseSidebar={() => setSidebarOpen(false)}
      />
      <Outlet />

      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
}

export default App;
