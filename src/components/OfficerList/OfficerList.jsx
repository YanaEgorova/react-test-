import css from "./OfficerList.module.css";
import OfficerProfile from "../OfficerProfile/OfficerProfile";

export default function OfficerList({ items }) {
  
  return (
    <ul className={css.list}>
      {items.map(item => (
        <li key={item.id}>
          <OfficerProfile officer={item} />
        </li>
      ))}
    </ul>
  );
}
