import css from "../CommonBtn/CommonBtn.module.css";

export default function CommonBtn({ value, onUpdate }) {
  return (
    <button className={css.btn} onClick={onUpdate}>
      Clicks: {value}
    </button>
  );
}
