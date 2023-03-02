import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import s from "./Page2.module.css";

export default function Page2() {
  return (
    <>
      <Header />
      <div className={s.fild}>
        <div>
          <h2>Доступні ігри</h2>
          <ul>
            <li>
              <h3>Вгадай двері</h3>
              <img
                height={"100px"}
                src={require("../../images/door.jpg")}
                alt="три двери"
              />
            </li>
            <li>
              <h3>Вгадай число</h3>
              <img
                height={"100px"}
                src={require("../../images/numbers.jpg")}
                alt="угадай число"
              />
            </li>
            <li>
              <Link to={"/coin-flip"}>
                <h3>Монетка</h3>
                <img
                  height={"100px"}
                  src={require("../../images/coinToss.jpg")}
                  alt="брось монетку"
                />
              </Link>
            </li>
          </ul>
          <p>Мета гри подвоїти початковий депозит, граючи в ігри</p>
        </div>
        <aside>
          <h3>Результати</h3>
        </aside>
      </div>
    </>
  );
}
