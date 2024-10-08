import css from "../ProfileSection/ProfileSection.module.css";

export default function ProfileSection({ title, children }) {
  return (
    <section className={css.section}>
      <h1 className={css.title}>{title}</h1>
      {children}
    </section>
  );
}
