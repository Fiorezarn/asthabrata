// eslint-disable-next-line react/prop-types
export default function Card({
  parent,
  child1,
  child2,
  h1,
  p,
  title,
  content,
  footer,
}) {
  return (
    <div className="card">
      <div className={parent}>
        <div className={child1}>
          <div className={child2}>{title}</div>
          <h1 className={h1}>{content}</h1>
          <p className={p}>{footer}</p>
        </div>
      </div>
    </div>
  );
}
