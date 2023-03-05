import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

import { getName, getDeposit, getBalance } from "../../redux/userSlice";

import Page1 from "../../pages/Page1";
import Page2 from "../../pages/Page2";
import Page3 from "../../pages/Page3";
import Page4 from "../../pages/Page4";
import Page5 from "../../pages/Page5";
import Page6 from "../../pages/Page6";
import Page7 from "../../pages/Page7";

export default function AppRoutes() {
  const [isMounted, setIsMounted] = useState(false);
  const navigate = useNavigate();
  const name = useSelector(getName);
  const deposit = useSelector(getDeposit);
  const balance = useSelector(getBalance);

  useEffect(() => {
    name && setIsMounted(true);
    !name && setIsMounted(false);
  }, [name]);

  useEffect(() => {
    if (!name) {
      navigate("/login", { replace: true });
    }
  }, [name, navigate]);

  useEffect(() => {
    if (isMounted && balance <= 0) {
      navigate("/loser's-page", { replace: true });
    }
  }, [balance, isMounted, navigate]);

  useEffect(() => {
    if (balance / deposit > 2) {
      navigate("/winner-page", { replace: true });
    }
  }, [balance, deposit, navigate]);

  return (
    <Routes>
      <Route path="/login" element={<Page1 />} />
      <Route path="/" element={<Page2 />} />
      <Route path="/coin-flip" element={<Page3 />} />
      <Route path="/guess-the-door" element={<Page4 />} />
      <Route path="/guess-the-number" element={<Page5 />} />
      <Route path="/winner-page" element={<Page6 />} />
      <Route path="/loser's-page" element={<Page7 />} />
      <Route path="*" element={<Navigate to="/" replace={true} />} />
    </Routes>
  );
}
