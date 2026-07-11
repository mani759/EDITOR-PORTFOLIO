export default function SectionHeading({ title, subtitle }) {
  return (
    <section>
      <h2>{title}</h2>
      {subtitle ? <p>{subtitle}</p> : null}
    </section>
  );
}
