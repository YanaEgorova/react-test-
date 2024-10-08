import css from "./OfficerProfile.module.css";
import clsx from "clsx";
import { MdAirplanemodeActive, MdAirplanemodeInactive } from "react-icons/md";

export default function OfficerProfile({
  officer: { name, rank, age, spec, skills, status },
}) {
  return (
    <div
      className={clsx(css.item, status === "Active" ? css.active : css.retired)}
    >
      {status === "Active" && <MdAirplanemodeActive />}
      {status === "Retired" && <MdAirplanemodeInactive />}

      <p>{name}</p>
      <p>{rank}</p>
      <p>{age}</p>
      <p>{spec}</p>
      <ul className={css.list}>
        {skills.map((skill, idx) => (
          <li key={idx}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
