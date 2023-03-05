import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import BtnAgain from "../BtnAgain/BtnAgain";
import { getName, getDeposit, getBalance } from "../../redux/userSlice";
import s from "./Header.module.css";
export default function Header({ arr }) {
  const name = useSelector(getName);
  const deposit = useSelector(getDeposit);
  const balance = useSelector(getBalance);

  return (
    <header className={s.header}>
      <div className={s.logo}>
        <Link to="/">
          <img
            height="28px"
            src={require("../../images/logo-mini.jpg")}
            alt="logo"
          />
        </Link>
      </div>
      <span>{name}</span>
      <span>Депозит : {deposit} $</span>
      <span>Баланс : {balance} $</span>
      <BtnAgain className={s.btn} />
    </header>
  );
}
