import { useDispatch } from "react-redux";

import { deleteUser } from "../../redux/userSlice";
import s from "./BtnAgain.module.css";

export default function BtnAgain() {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(deleteUser());
  };

  return (
    <button className={s.button} type="button" onClick={handleClick}>
      Заново
    </button>
  );
}
