import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import { CartProvider } from "./context/ShoppingCartContext";
import { Box } from "@mui/material";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <CartProvider>
      <Navbar
        open={sidebarOpen}
        onMenuClick={() => setSidebarOpen(true)}
        onCloseSidebar={() => setSidebarOpen(false)}
      />
      <Box sx={{ paddingTop: "4rem" }}>
        <Outlet />
      </Box>

      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </CartProvider>
  );
}

export default App;
