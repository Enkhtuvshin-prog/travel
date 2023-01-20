import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AuthPage from "./pages/Auth";
import Banner from "./pages/Home/Banner";

function App() {
  return (
    <Router>
      {/* <AppBar/> */}
      <Routes>
        {/* <Route path="/login" element={<AuthPage />} /> */}
        <Route path="/" element={<Home />} />
        {/* <Route path="/banner" element={<Banner/>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
