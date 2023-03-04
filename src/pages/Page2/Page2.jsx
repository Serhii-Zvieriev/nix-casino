import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import s from "./Page2.module.css";

export default function Page2() {
  return (
    <>
      <Header />
      <div className={s.fild}>
        <div>
          <h2 className={s.h2}>Доступні ігри</h2>
          <ul className={s.ul}>
            <li className={s.li}>
              <Link
                to={"/guess-the-door"}
                style={{ height: "100%", display: "block" }}
              >
                <h3 className={s.h3}>Вгадай двері</h3>
                <img
                  className={s.img}
                  height={"100px"}
                  src={require("../../images/door.jpg")}
                  alt="три двери"
                />
              </Link>
            </li>
            <li className={s.li}>
              <Link
                to={"/guess-the-number"}
                style={{ height: "100%", display: "block" }}
              >
                <h3 className={s.h3}>Вгадай число</h3>
                <img
                  className={s.img}
                  height={"100px"}
                  src={require("../../images/numbers.jpg")}
                  alt="угадай число"
                />
              </Link>
            </li>
            <li className={s.li}>
              <Link
                to={"/coin-flip"}
                style={{ height: "100%", display: "block" }}
              >
                <h3 className={s.h3}>Монетка</h3>
                <img
                  className={s.img}
                  height={"100px"}
                  src={require("../../images/coinToss.jpg")}
                  alt="брось монетку"
                />
              </Link>
            </li>
          </ul>
          <p className={s.p}>
            Мета гри подвоїти початковий депозит, граючи в ігри
          </p>
        </div>
        <aside className={s.aside}>
          <h3 className={s.h3}>Результати</h3>
        </aside>
      </div>
    </>
  );
}
