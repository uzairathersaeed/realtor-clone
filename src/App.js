import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";
import Offers from "./pages/Offers";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Header from "./components/Header";
function App() {
  return (
    <div>
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/forgot-password" element={<ForgotPassword/>} />
          <Route path="/Offers" element={<Offers/>} />
          <Route path="/Sign-in" element={<SignIn/>} />
          <Route path="/Sign-up" element={<SignUp/>} />
          <Route path="/Profile" element={<Profile/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
