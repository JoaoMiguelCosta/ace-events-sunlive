export default function Target({ size = 24, className = "", ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Alvo (fica com currentColor) */}
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />

      {/* Seta (fica azul) */}
      <line className="aceTargetArrow" x1="4" y1="4" x2="12" y2="12" />
      <polyline className="aceTargetArrow" points="9 3 4 4 5 9" />
    </svg>
  );
}
