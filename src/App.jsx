import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [surfaceCount, setSurfaceCount] = useState(0);
  const isSurface = sidebarOpen || surfaceCount > 0;
  const appBarBg = isSurface ? "paper" : "default";

  return (
    <>
      <Navbar
        appBarBg={appBarBg}
        open={sidebarOpen}
        onMenuClick={() => setSidebarOpen(true)}
        onCloseSidebar={() => setSidebarOpen(false)}
      />
      <Outlet context={{ setSurfaceCount }} />

      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
}

export default App;
