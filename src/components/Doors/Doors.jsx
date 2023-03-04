import s from "./Doors.module.css";

export default function Doors({ handleClick }) {
  return (
    <ul className={s.ul}>
      <li onClick={handleClick} className={s.li}>
        1
      </li>
      <li onClick={handleClick} className={s.li}>
        2
      </li>
      <li onClick={handleClick} className={s.li}>
        3
      </li>
    </ul>
  );
}
