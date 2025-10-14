export default function Card({ children, className = "" }) {
  return (
    <div className={`card-base card-hover ${className}`}>
      {children}
    </div>
  );
}
