import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import getRandomInt from "../../helpers/getRandomInt";
import { getBalance, updateBalance } from "../../redux/userSlice";
import Header from "../../components/Header";
import TitleAndDescription from "../../components/TitleAndDescription";
import InputNumber from "../../components/InputNumber";
import LittleSidebar from "../../components/LittleSidebar";
import s from "./Page5.module.css";

export default function Page5() {
  const dispatch = useDispatch();
  let balance = useSelector(getBalance);
  const [gameResult, setGameResult] = useState([]);

  const title = "Вгадай число";
  const description =
    "Кожен раз коли ви клікаєте по на кнопку “спробувати”, з вашого балансу списується 5% від вашого початкового депозиту, программа генерує випадкове значення від 1 до 10,  якщо ваш варінт співпав з тим який згенерувала программа то ви отримаєте вдесятеро більше ніж поставили, якщо ні то втрачаєте списані кошти з балансу. ";
  return (
    <div>
      <Header />
      <div className={s.wrapper}>
        <div className={s.leftSide}>
          <TitleAndDescription title={title} desc={description} />
          <InputNumber />
        </div>
        <LittleSidebar arr={gameResult} />
      </div>
    </div>
  );
}
