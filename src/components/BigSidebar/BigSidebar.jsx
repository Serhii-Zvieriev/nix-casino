import s from "./BigSidebar.module.css";

export default function BigSidebar({ arr }) {
  return (
    <aside className={s.aside}>
      <h3 className={s.h3}>Результати</h3>
      <ul>
        {arr.map((el, idx) => (
          <li key={idx}>
            <span>
              {Object.keys(el)}: {Object.values(el)}
            </span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
