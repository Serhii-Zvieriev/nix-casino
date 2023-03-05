import { useSelector } from "react-redux";
import { getName, getDeposit, getBalance } from "../../redux/userSlice";

import BtnAgain from "../../components/BtnAgain/BtnAgain";
import s from "./Page6.module.css";

export default function Page6() {
  const name = useSelector(getName);
  const deposite = useSelector(getDeposit);
  const balance = useSelector(getBalance);
  return (
    <div className={s.wrapper}>
      <div className={s.text}>
        Вітаємо {name}, ви змогли подвоїти ваш депозиз з {deposite} до {balance}
        $
      </div>
      <BtnAgain className={s.btn} />
    </div>
  );
}
