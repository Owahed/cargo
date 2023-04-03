import { useEffect } from "react";
import "./index.css";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Router from "./router/router";

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <button
          className="scroll-top"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          <MdOutlineKeyboardArrowUp size={30} />
        </button>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
