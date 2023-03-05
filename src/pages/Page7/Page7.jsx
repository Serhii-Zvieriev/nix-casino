import { useSelector } from "react-redux";
import { getName, getDeposit } from "../../redux/userSlice";

import BtnAgain from "../../components/BtnAgain/BtnAgain";
import s from "./Page7.module.css";

export default function Page7() {
  const name = useSelector(getName);
  const deposite = useSelector(getDeposit);
  return (
    <div className={s.wrapper}>
      <div className={s.text}>
        {name}, ви не змогли подвоїти ваш депозиз з {deposite}, можливо
        наступного разу пощастить
      </div>
      <BtnAgain className={s.btn} />
    </div>
  );
}
