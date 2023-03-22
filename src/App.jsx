import Navbar from "./components/navbar";
import "./index.css";
import Booking from "./page/booking/Booking";
import Hero from "./page/Hero/Hero";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Booking />
    </div>
  );
}

export default App;
