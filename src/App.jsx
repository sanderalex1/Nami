import { useState } from "react";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Home from "./pages/Home";
import Card from "./Components/Card";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [basketOpen, setBasketOpen] = useState(false);

  return (
    <>
      <Navbar
        open={sidebarOpen}
        onMenuClick={() => setSidebarOpen(true)}
        onCloseSidebar={() => setSidebarOpen(false)}
        onOpenBasket={basketOpen}
      />
      <Home />
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <Card />
    </>
  );
}

export default App;
