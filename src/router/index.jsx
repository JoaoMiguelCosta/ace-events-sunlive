import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home.jsx";
import EventPage from "../pages/Events/EventPage.jsx";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events/:key" element={<EventPage />} />
    </Routes>
  );
}
