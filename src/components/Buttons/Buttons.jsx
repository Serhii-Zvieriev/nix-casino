import s from "./Buttons.module.css";

export default function Buttons({ fn1, fn2 }) {
  return (
    <div className={s.buttons}>
      <button className={s.btn} type="button" onClick={fn1}>
        Орел
      </button>
      <button className={s.btn} type="button" onClick={fn2}>
        Решка
      </button>
    </div>
  );
}
