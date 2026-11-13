export function Bolt({ className = "", title }: { className?: string; title?: string }) {
  return (
    <svg
      viewBox="0 0 64 96"
      className={className}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      fill="currentColor"
    >
      <path d="M38 0 4 54h22L18 96 60 38H36L38 0Z" />
    </svg>
  );
}
