import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import CreateEventPage from "./pages/CreateEventPage/CreateEventPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<RegisterPage />} />
          <Route path="/createEvent" element={<CreateEventPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
