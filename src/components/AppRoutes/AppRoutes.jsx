import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { useEffect } from "react";

import { getName } from "../../redux/userSlice";

import Page1 from "../../pages/Page1";
import Page2 from "../../pages/Page2";
import Page3 from "../../pages/Page3";
import Page4 from "../../pages/Page4";
import Page5 from "../../pages/Page5";
import Page6 from "../../pages/Page6";
import Page7 from "../../pages/Page7";

export default function AppRoutes() {
  const navigate = useNavigate();
  const name = useSelector(getName);

  useEffect(() => {
    if (name === "") {
      navigate("/login", { replace: true });
    }
  }, [name, navigate]);

  return (
    <Routes>
      <Route path="/login" element={<Page1 />} />
      <Route path="/" element={<Page2 />} />
      <Route path="/coin-flip" element={<Page3 />} />
      <Route path="/guess-the-door" element={<Page4 />} />
      <Route path="/guess-the-number" element={<Page5 />} />
      <Route path="/page6" element={<Page6 />} />
      <Route path="/page7" element={<Page7 />} />
      <Route path="*" element={<Navigate to="/" replace={true} />} />
    </Routes>
  );
}
