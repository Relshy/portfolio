import { IconsId } from "@/types/icons"

const paths: Record<IconsId, React.ReactNode> = {
  github: (
    <>
      <rect
        x="2"
        y="3"
        width="20"
        height="18"
        rx="3"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
      />
      <path
        d="M8 9 L5 12 L8 15"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 9 L19 12 L16 15"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  discord: (
    <>
      <path
        d="M5 6 C9 4.3 15 4.3 19 6 C21 9 21.6 13 21.2 17 C19.6 18.5 17.5 19.5 15.8 19.9 L14.9 17.7 C12.9 18.2 11.1 18.2 9.1 17.7 L8.2 19.9 C6.5 19.5 4.4 18.5 2.8 17 C2.4 13 3 9 5 6 Z"
        fill="currentColor"
      />
      <circle cx="9" cy="12" r="1.8" fill="var(--icon-dot, #F2F2F2)" />
      <circle cx="15" cy="12" r="1.8" fill="var(--icon-dot, #F2F2F2)" />
    </>
  ),
  email: (
    <>
      <rect
        x="2"
        y="4"
        width="20"
        height="16"
        rx="3"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
      />
      <path
        d="M3 6 L12 13 L21 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </>
  ),
  youtube: (
    <>
      <rect x="1.5" y="4.5" width="21" height="15" rx="4" fill="currentColor" />
      <path d="M10 8.8v6.4l6-3.2z" fill="var(--icon-dot, #F2F2F2)" />
    </>
  ),
  hamburger: (
    <>
      <rect x="3" y="5" width="18" height="2.4" rx="1.2" fill="currentColor" />
      <rect x="3" y="10.8" width="18" height="2.4" rx="1.2" fill="currentColor" />
      <rect x="3" y="16.6" width="18" height="2.4" rx="1.2" fill="currentColor" />
    </>
  ),
  close: (
    <path
      d="M5 5 L19 19 M19 5 L5 19"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
  ),
  search: (
    <>
      <circle
        cx="10.5"
        cy="10.5"
        r="6.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="M15.5 15.5 L21 21"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </>
  ),
  arrow: (
    <path
      d="M9 6l6 6-6 6"
      stroke="currentColor"
      strokeWidth="2.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
}

export default function Icon({
  icon,
  className,
}: {
  icon: IconsId
  className?: string
}) {
  return (
    <svg
      role="img"
      aria-label={icon}
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      className={className}
    >
      {paths[icon]}
    </svg>
  )
}
