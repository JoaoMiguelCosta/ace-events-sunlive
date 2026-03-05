// src/ui/icons/WhatsApp.jsx
export default function WhatsApp({ size = 24, className = "", ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      {/* círculo externo (outline) */}
      <path
        d="M12 21a9 9 0 1 0-7.72-4.39L3 21l4.6-1.2A8.96 8.96 0 0 0 12 21Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* balão (outline) */}
      <path
        d="M8.9 7.9a4.7 4.7 0 0 1 6.7 0 4.7 4.7 0 0 1 0 6.7 4.7 4.7 0 0 1-6.7 0 4.7 4.7 0 0 1 0-6.7Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.0"
      />

      {/* handset simplificado (solid) */}
      <path
        d="M15.7 14.5c-.2.5-1.1 1-1.6 1.1-.4.1-1 .2-2.7-.5-2.1-.9-3.4-3-3.5-3.1-.1-.1-.8-1.1-.8-2.1 0-1 .5-1.5.7-1.7.2-.2.4-.2.5-.2h.4c.1 0 .3 0 .4.4l.5 1.3c.1.3.1.4 0 .6l-.2.3c-.1.1-.2.2-.1.4.1.2.5.8 1.1 1.3.7.6 1.3.8 1.5.9.2.1.3.1.4-.1l.5-.6c.1-.2.3-.2.5-.1l1.3.6c.3.2.3.3.3.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
