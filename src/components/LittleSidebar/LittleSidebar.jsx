import s from "./LittleSidebar.module.css";
export default function LittleSidebar({ arr }) {
  return (
    <aside className={s.aside}>
      <span> Минулі спроби</span>
      <ul>
        {arr.map((el, idx) => (
          <li key={idx}>
            {/* {console.log(el)}
            {el.eagle && (
              <span>
                {Object.keys(el)}: {el.eagle}
              </span>
            )}
            {el.eails && <span>Решка: {el.eails}</span>} */}
            <span>
              {Object.keys(el)}: {Object.values(el)}
            </span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
