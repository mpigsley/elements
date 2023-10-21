import type { IconProps } from 'react-feather';

export default function HalfCircle({
  color = 'currentColor',
  size = '24',
  ...rest
}: IconProps): JSX.Element {
  return (
    <svg
      fill="none"
      height={size}
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d="M12 2 A10 10 0 0 0 12 22 L12 12 Z" fill="black" />
      <path d="M12 2 A10 10 0 0 1 12 22 L12 12 Z" fill="transparent" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}
