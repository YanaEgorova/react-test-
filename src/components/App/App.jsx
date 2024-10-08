import { useState, useEffect } from "react";
import "./App.css";
// import Timer from "../Timer/Timer";
import Reader from "../Reader/Reader";
import articles from "../../articles.json";
// import officers from "../../officers.json";
// import OfficerList from "../OfficerList/OfficerList";
// import ProfileSection from "../ProfileSection/ProfileSection";
// import UserInfo from "../UserInfo/UserInfo";
// import Points from "../Points/Points";
// import Levels from "../Levels/Levels";
// import Button from "../Button/Button";
// import CommonBtn from "../CommonBtn/CommonBtn";

export default function App() {
  return (
    <>
      {/* <Timer /> */}
      <Reader items={articles} />
      {/* <CommonBtn value={clicks} onUpdate={handleClick} />
      <CommonBtn value={clicks} onUpdate={handleClick} /> */}
      {/* <button onClick={handleReset}>Reset</button>
      <Button>Clicks A</Button>
      <Button>Clicks B</Button>
      <Button>Clicks C</Button> */}
      {/* <Button onClick={handleClick} /> */}
      {/* <button onClick={handleClickA}>Clicks A: {clicksA}</button> */}

      {/* <button onClick={handleClickB}>Clicks B: {clicksB}</button> */}
      {/* <OfficerList items={officers} /> */}
      {/* <ProfileSection title="Рейтинг">
        <UserInfo />
      </ProfileSection>
      <ProfileSection title="Що це за очки досвіду та рівні?">
        <Points />
      </ProfileSection>
      <ProfileSection title="Як отримати більше очків досвіду?">
        <Levels/>
      </ProfileSection> */}
    </>
  );
}
