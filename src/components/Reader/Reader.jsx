import Progress from "../Progress/Progress";
import css from "../Reader/Reader.module.css";
import { useState, useEffect } from "react";

export default function Reader({ items }) {
  const [idx, setIdx] = useState(() => {
    const savedIdx = localStorage.getItem("idx");
    if (savedIdx !== null) {
      return JSON.parse(savedIdx);
    }
    return 0;
  });

  const currentArticle = items[idx];

  const handlePrev = () => {
    setIdx(idx - 1);
  };

  const handleNext = () => {
    setIdx(idx + 1);
  };

  useEffect(() => {
    localStorage.setItem("idx", idx);
    document.title = localStorage.getItem("idx");
  }, [idx]);

  const isFirst = idx === 0;
  const isLast = idx === items.length - 1;
  return (
    <div className={css.wrapper}>
      <header>
        <div>
          <button className={css.btn} onClick={handlePrev} disabled={isFirst}>
            Prev
          </button>
          <button className={css.btn} onClick={handleNext} disabled={isLast}>
            Next
          </button>
        </div>

        <Progress current={idx + 1} total={items.length} />
      </header>

      <article>
        <h2>{currentArticle.topic}</h2>
        <p>{currentArticle.text}</p>
      </article>
    </div>
  );
}
