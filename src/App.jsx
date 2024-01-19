import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./page/LandingPage.jsx";
// import Example from "./page/Example.jsx";
import DetailsPage from "./page/DetailsPage.jsx";
import Checkout from "./page/Checkout.jsx";

function App() {
  return (
    <div className="App font-poppins">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/properties/:id" element={<DetailsPage />} />
          <Route path="/checkout" element={<Checkout />} />
          {/* <Route path="/" element={<Example />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
