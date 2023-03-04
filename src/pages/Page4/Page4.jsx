import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import getRandomInt from "../../helpers/getRandomInt";
import { getBalance, updateBalance } from "../../redux/userSlice";
import Header from "../../components/Header";
import TitleAndDescription from "../../components/TitleAndDescription";
import Doors from "../../components/Doors";
import LittleSidebar from "../../components/LittleSidebar";
import s from "./Page4.module.css";

export default function Page4() {
  const dispatch = useDispatch();
  let balance = useSelector(getBalance);
  const [gameResult, setGameResult] = useState([]);

  const title = "Вгадай двері";
  const description =
    "Кожен раз коли ви клікаєте по одній з дверей, з вашого балансу списується 5% від вашого початкового депозиту, программа генерує випадкове значення від 1 до 3,  якщо ваш варінт співпав з тим який згенерувала программа то ви потроїте ставку якщо ні то втрачаєте списані кошти з балансу. ";

  const handleClick = (e) => {
    let target = e.target.textContent;
    if (getRandomInt(1, 3) === +target) {
      balance = +Number(balance + (balance / 100) * 5).toFixed(2);
      dispatch(updateBalance(balance));
      setGameResult([...gameResult, { [target]: balance }]);
    } else {
      balance = +Number(balance - (balance / 100) * 5).toFixed(2);
      dispatch(updateBalance(balance));
      setGameResult([...gameResult, { [target]: balance }]);
    }
  };

  return (
    <div>
      <Header />
      <div className={s.wrapper}>
        <div className={s.leftSide}>
          <TitleAndDescription title={title} desc={description} />
          <Doors handleClick={handleClick} />
        </div>
        <LittleSidebar arr={gameResult} />
      </div>
    </div>
  );
}
