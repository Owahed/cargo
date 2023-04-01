import { createBrowserRouter } from "react-router-dom";
import About from "../page/About";
import Home from "../page/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // loader: rootLoader,
  },
  {
    path: "/about",
    element: <About />,
    // loader: teamLoader,
  },
]);

export default router;
