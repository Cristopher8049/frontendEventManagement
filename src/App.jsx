import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import CreateEventPage from "./pages/CreateEventPage/CreateEventPage";
import Testpage from "./pages/Testpage/Testpage";
import EventDetailPage from "./pages/EventDetailPage/EventDetailPage";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";
import { useAuth } from './context/authContext';



function App() {
  const { loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // O un componente de carga más elaborado
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoutes><HomePage /></ProtectedRoutes>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/createEvent" element={<ProtectedRoutes><CreateEventPage /></ProtectedRoutes>} />
        <Route path="/TestPage" element={<ProtectedRoutes><Testpage /></ProtectedRoutes>} />
        <Route path="/event/:eventId" element={<ProtectedRoutes><EventDetailPage /></ProtectedRoutes>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
