import { useEffect } from "react";
import "./index.css";
import Home from "./page/Home";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import router from "./router/router";
import Navbar from "./components/navbar/navbar";
import About from "./page/About";

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      {/* <RouterProvider router={router}>
        <div>
          <Navbar />
          <Home />
          <button
            className="scroll-top"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            <MdOutlineKeyboardArrowUp size={30} />
          </button>
        </div>
      </RouterProvider> */}

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
