import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import randomCoinFlip from "../../helpers/randomCoinFlip";
import { getBalance, updateBalance } from "../../redux/userSlice";
import Header from "../../components/Header";
import Buttons from "../../components/Buttons";
import TitleAndDescription from "../../components/TitleAndDescription";
import LittleSidebar from "../../components/LittleSidebar";
import s from "./Page3.module.css";

export default function Page3() {
  const dispatch = useDispatch();
  let balance = useSelector(getBalance);
  const [gameResult, setGameResult] = useState([]);
  const description =
    "Кожен раз коли ви нажимаєте на орел чи решка, з вашого балансу списується 5% від вашого початкового депозиту, программа генерує випадкове значення, якщо ваш варінт співпав з тим який згенерувала программа то ви подвоюєте ставку якщо ні то втрачаєте списані кошти з балансу.";
  const title = "Монетка";

  const handleClickEagle = () => {
    const blc = randomCoinFlip(balance);
    dispatch(updateBalance(blc));
    setGameResult([...gameResult, { eagle: blc }]);
  };

  const handleClickEails = () => {
    const blc = randomCoinFlip(balance);
    dispatch(updateBalance(blc));
    setGameResult([...gameResult, { eails: blc }]);
  };

  return (
    <div>
      <Header />

      <div className={s.wrapper}>
        <div className={s.leftSide}>
          <TitleAndDescription title={title} desc={description} />
          <Buttons fn1={handleClickEagle} fn2={handleClickEails} />
        </div>

        <LittleSidebar arr={gameResult} />
      </div>
    </div>
  );
}
