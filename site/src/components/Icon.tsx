import { IconsId } from "@/types/icons"

const paths: Record<IconsId, React.ReactNode> = {
  github: (
    <path
      fill="currentColor"
      d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z"
    />
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
