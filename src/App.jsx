import { useEffect } from "react";
import "./index.css";
import Home from "./page/Home";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

function App() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
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
  );
}

export default App;
