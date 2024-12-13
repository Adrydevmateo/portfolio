interface Props {
  label: string;
  to?: string;
  withIcon?: boolean;
}

export function Link({ label, to, withIcon }: Props) {
  return (
    <a
      className={`link ${!to ? "disabled" : ""}`}
      href={to}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
      {withIcon && <Icon />}
    </a>
  );
}

const Icon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    aria-label="Arrow"
  >
    <title>Arrow</title>
    <path fill="currentColor" d="M6 6v2h8.59L5 17.59L6.41 19L16 9.41V18h2V6z" />
  </svg>
);
