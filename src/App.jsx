import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import { CartProvider } from "./context/ShoppingCartContext";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <CartProvider>
      <Navbar
        open={sidebarOpen}
        onMenuClick={() => setSidebarOpen(true)}
        onCloseSidebar={() => setSidebarOpen(false)}
      />
      <Outlet />

      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </CartProvider>
  );
}

export default App;
