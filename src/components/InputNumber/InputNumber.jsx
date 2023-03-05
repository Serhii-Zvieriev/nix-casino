import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect, useRef } from "react";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { updateResultGame } from "../../redux/gameSlice";
import { getBalance, getDeposit, updateBalance } from "../../redux/userSlice";
import getRandomInt from "../../helpers/getRandomInt";
import s from "./InputNumber.module.css";

export default function InputNumber({ gameResult, setGameResult }) {
  const dispatch = useDispatch();
  let balance = useSelector(getBalance);
  const deposite = useSelector(getDeposit);
  const [num, setNum] = useState("");
  const [result, setResult] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const resultRef = useRef(result);

  const notify = () => {
    toast.error(
      "Введене число не входить y проміжок від 1 до 10, спробуйте ще раз",
      { theme: "colored" }
    );
  };

  const handleClick = () => {
    if (num < 1 || num > 10) {
      notify();
      setNum("");
      return;
    }

    if (getRandomInt(1, 10) === num) {
      balance = +Number(balance + (deposite / 100) * 5).toFixed(2);
      dispatch(updateBalance(balance));
      setGameResult([
        ...gameResult,
        { [num]: `+${+Number((deposite / 100) * 5).toFixed(2)}` },
      ]);
      setResult(+Number(result + (deposite / 100) * 5).toFixed(2));
      setNum("");
    } else {
      balance = +Number(balance - (deposite / 100) * 5).toFixed(2); //!!!
      dispatch(updateBalance(balance));
      setGameResult([
        ...gameResult,
        { [num]: `-${+Number((deposite / 100) * 5).toFixed(2)}` },
      ]);
      setResult(+Number(result - (deposite / 100) * 5).toFixed(2));
      setNum("");
    }
  };

  useEffect(() => {
    return () => {
      setIsMounted(true);
      if (isMounted) {
        resultRef.current > 0
          ? dispatch(
              updateResultGame({ "Вгадай число": `+${resultRef.current}` })
            )
          : dispatch(updateResultGame({ "Вгадай число": resultRef.current }));

        setIsMounted(false);
      }
    };
  }, [dispatch, isMounted]);

  useEffect(() => {
    resultRef.current = result;
  }, [result]);

  return (
    <>
      <div className={s.wrapper}>
        <input
          value={num}
          onChange={(e) => setNum(+e.target.value)}
          className={s.input}
          type="number"
          placeholder="Введіть число"
        />
        <button className={s.btn} type="button" onClick={handleClick}>
          Спробувати
        </button>
      </div>
      <ToastContainer />
    </>
  );
}
