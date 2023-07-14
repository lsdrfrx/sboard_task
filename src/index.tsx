import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";
import User from "./pages/User/User";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/user/:username" element={<User />} />
    </Routes>
  </BrowserRouter>
);
