import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "views/homepage";
import LoginPage from "views/loginpage";
import ProfilePage from "views/profilepage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile/:userId" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
