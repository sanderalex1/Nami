import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Profile from "./pages/Profile";
import ShoppingCart from "./pages/ShoppingCart";

const router = createBrowserRouter([
  {
    path: "/Nami/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/Nami/menu", element: <Menu /> },
      { path: "/Nami/profile", element: <Profile /> },
      { path: "/Nami/shopping_cart", element: <ShoppingCart /> },
    ],
  },
]);

export default router;
