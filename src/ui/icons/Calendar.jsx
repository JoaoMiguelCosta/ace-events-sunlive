// src/ui/icons/Calendar.jsx
export default function Calendar({ size = 24, className = "", ...props }) {
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
      <path d="M8 2v2" />
      <path d="M16 2v2" />
      <path d="M3 10h18" />
      <rect x="3" y="4" width="18" height="18" rx="2" />
    </svg>
  );
}
