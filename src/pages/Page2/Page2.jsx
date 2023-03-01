import Header from "../../components/Header/Header";
import s from "./Page2.module.css";

export default function Page2() {
  return (
    <>
      <Header />
      <div className={s.fild}>
        <div>
          <h2>Доступні ігри</h2>
          <p>Мета гри подвоїти початковий депозит, граючи в ігри</p>
        </div>
        <aside></aside>
      </div>
    </>
  );
}
