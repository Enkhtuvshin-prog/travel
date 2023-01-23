import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SecondPage from "./pages/SecondPage"
function App() {
  return (
    <Router>
      {/* <AppBar/> */}
      <Routes>
        {/* <Route path="/login" element={<AuthPage />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/Second" element={<SecondPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
