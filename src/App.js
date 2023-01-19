import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AuthPage from "./pages/Auth";

function App() {
  return (
    <Router>
      {/* <AppBar/> */}
      <Routes>
        {/* <Route path="/login" element={<AuthPage />} /> */}
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
