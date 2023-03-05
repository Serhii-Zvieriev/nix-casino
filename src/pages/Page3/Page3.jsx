import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect, useRef } from "react";

import randomCoinFlip from "../../helpers/randomCoinFlip";
import { getBalance, getDeposit, updateBalance } from "../../redux/userSlice";
import { updateResultGame } from "../../redux/gameSlice";
import Header from "../../components/Header";
import Buttons from "../../components/Buttons";
import TitleAndDescription from "../../components/TitleAndDescription";
import LittleSidebar from "../../components/LittleSidebar";
import s from "./Page3.module.css";

export default function Page3() {
  const dispatch = useDispatch();
  let balance = useSelector(getBalance);
  const deposit = useSelector(getDeposit);
  const [result, setResult] = useState(0);
  const [gameResult, setGameResult] = useState([]);
  const [isMounted, setIsMounted] = useState(false);
  const resultRef = useRef(result);

  const description =
    "Кожен раз коли ви нажимаєте на орел чи решка, з вашого балансу списується 5% від вашого початкового депозиту, программа генерує випадкове значення, якщо ваш варінт співпав з тим який згенерувала программа то ви подвоюєте ставку якщо ні то втрачаєте списані кошти з балансу.";
  const title = "Монетка";

  const handleClickEagle = () => {
    const blc = randomCoinFlip(balance, deposit);
    dispatch(updateBalance(blc));

    const normalizedCalculation = +(blc - balance).toFixed(2);
    // console.log(normalizedCalculation);
    // console.log(blc);
    // console.log(balance);
    // console.log(blc - balance);

    if (blc - balance > 0) {
      setGameResult([...gameResult, { Орел: `+${normalizedCalculation}` }]);
      setResult(+Number(result + normalizedCalculation).toFixed(2));
    } else {
      setGameResult([...gameResult, { Орел: `${normalizedCalculation}` }]);
      setResult(+Number(result + normalizedCalculation).toFixed(2));
    }
  };

  const handleClickEails = () => {
    const blc = randomCoinFlip(balance, deposit);
    dispatch(updateBalance(blc));
    const normalizedCalculation = +(blc - balance).toFixed(2);
    if (blc - balance > 0) {
      setGameResult([...gameResult, { Решка: `+${normalizedCalculation}` }]);
      setResult(+Number(result + normalizedCalculation).toFixed(2));
    } else {
      setGameResult([...gameResult, { Решка: `${normalizedCalculation}` }]);
      setResult(+Number(result + normalizedCalculation).toFixed(2));
    }
  };

  useEffect(() => {
    return () => {
      setIsMounted(true);
      if (isMounted) {
        resultRef.current > 0
          ? dispatch(updateResultGame({ Монетка: `+${resultRef.current}` }))
          : dispatch(updateResultGame({ Монетка: resultRef.current }));

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
          <Buttons fn1={handleClickEagle} fn2={handleClickEails} />
        </div>

        <LittleSidebar arr={gameResult} />
      </div>
    </div>
  );
}
