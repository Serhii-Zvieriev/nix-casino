import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { createUser } from "../../redux/userSlice";
import s from "./Page1.module.css";

export default function Page1() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [deposit, setDeposit] = useState("");

  const wrongName = () => {
    toast.error("Введене ім'я недопустиме", { theme: "colored" });
  };

  const wrongDeposit = () => {
    toast.error("Сумма депозиту не може бути меньшою чи дорювнювати 0$", {
      theme: "colored",
    });
  };

  const addUser = () => {
    if (name.length < 3) {
      wrongName();
      return;
    }

    if (deposit <= 0) {
      wrongDeposit();
      return;
    }

    dispatch(
      createUser({
        name,
        deposit,
        balance: +deposit,
      })
    );
    navigate("/page2", { replace: true });
    setName("");
    setDeposit("");
  };

  return (
    <div className={s.wrapper}>
      <div className={s.form}>
        <div className={s.logo}></div>

        <input
          type="text"
          className={`${s.input} ${s.name}`}
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="off"
          placeholder="Ваше Ім’я"
        ></input>

        <input
          type="number"
          className={`${s.input} ${s.deposit}`}
          value={deposit}
          onChange={(e) => setDeposit(e.target.value)}
          autoComplete="off"
          placeholder="Початковий депозит"
        ></input>

        <button
          className={s.button}
          type="button"
          onClick={addUser}
          disabled={name === "" || deposit === ""}
        >
          Почати
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}
