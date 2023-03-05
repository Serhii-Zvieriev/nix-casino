import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect, useRef } from "react";

import { updateResultGame } from "../../redux/gameSlice";
import getRandomInt from "../../helpers/getRandomInt";
import { getBalance, getDeposit, updateBalance } from "../../redux/userSlice";
import Header from "../../components/Header";
import TitleAndDescription from "../../components/TitleAndDescription";
import Doors from "../../components/Doors";
import LittleSidebar from "../../components/LittleSidebar";
import s from "./Page4.module.css";

export default function Page4() {
  const dispatch = useDispatch();
  let balance = useSelector(getBalance);
  const deposite = useSelector(getDeposit);
  const [gameResult, setGameResult] = useState([]);
  const [result, setResult] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const resultRef = useRef(result);

  const title = "Вгадай двері";
  const description =
    "Кожен раз коли ви клікаєте по одній з дверей, з вашого балансу списується 5% від вашого початкового депозиту, программа генерує випадкове значення від 1 до 3,  якщо ваш варінт співпав з тим який згенерувала программа то ви потроїте ставку якщо ні то втрачаєте списані кошти з балансу. ";

  const handleClick = (e) => {
    let target = e.target.textContent;
    if (getRandomInt(1, 3) === +target) {
      balance = +Number(balance + (deposite / 100) * 5).toFixed(2);
      dispatch(updateBalance(balance));
      setGameResult([
        ...gameResult,
        { [target]: `+${+Number((deposite / 100) * 5).toFixed(2)}` },
      ]);
      setResult(+Number(result + (deposite / 100) * 5).toFixed(2));
    } else {
      balance = +Number(balance - (deposite / 100) * 5).toFixed(2);
      dispatch(updateBalance(balance));
      setGameResult([
        ...gameResult,
        { [target]: `-${+Number((deposite / 100) * 5).toFixed(2)}` },
      ]);
      setResult(+Number(result - (deposite / 100) * 5).toFixed(2));
    }
  };

  useEffect(() => {
    return () => {
      setIsMounted(true);
      if (isMounted) {
        resultRef.current > 0
          ? dispatch(
              updateResultGame({ "Вгадай двері": `+${resultRef.current}` })
            )
          : dispatch(updateResultGame({ "Вгадай двері": resultRef.current }));

        setIsMounted(false);
      }
    };
  }, [dispatch, isMounted]);

  useEffect(() => {
    resultRef.current = result;
  }, [result]);

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
