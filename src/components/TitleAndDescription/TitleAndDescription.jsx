import s from "./TitleAndDescription.module.css";
export default function TitleAndDescription({ title, desc }) {
  return (
    <>
      <h2 className={s.h2}>{title}</h2>
      <p className={s.p}>{desc}</p>
    </>
  );
}
