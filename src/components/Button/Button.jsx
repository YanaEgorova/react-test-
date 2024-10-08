import { useState } from "react";
import css from '../Button/Button.module.css'

export default function Button({ children }) {
  const [clicks, setClicks] = useState(10);

  function handleClick() {
    setClicks(clicks * 2);
  }
  return (
    <button className={css.btn} onClick={handleClick}>
      {children}: {clicks}
    </button>
  );
}
