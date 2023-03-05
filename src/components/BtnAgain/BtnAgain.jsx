import { useDispatch } from "react-redux";

import { deleteUser } from "../../redux/userSlice";
import { deleteResultGame } from "../../redux/gameSlice";
import s from "./BtnAgain.module.css";

export default function BtnAgain({ className }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(deleteUser());
    dispatch(deleteResultGame());
  };

  return (
    <button
      className={`${className} ${s.button}`}
      type="button"
      onClick={handleClick}
    >
      Заново
    </button>
  );
}
