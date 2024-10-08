import { useState, useEffect } from "react";

export default function Timer() {
  const [clicks, setClicks] = useState(() => {
    const savedClicks = localStorage.getItem("clicks");
    if (savedClicks !== null) {
      return JSON.parse(savedClicks);
    }
    return 0;
  });

  function handleClick() {
    setClicks(clicks + 100);
  }

  useEffect(() => {
    localStorage.setItem("clicks", clicks);
    document.title = localStorage.getItem("clicks");
  }, [clicks]);
  return <button onClick={handleClick}>Timer: {clicks}</button>;
}
