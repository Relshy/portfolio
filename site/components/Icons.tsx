type IconProps = React.SVGProps<SVGSVGElement>;

function Stroke({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function IconChevronDown(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M6 9l6 6 6-6" />
    </Stroke>
  );
}

export function IconArrowUpRight(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M7 17L17 7M9 7h8v8" />
    </Stroke>
  );
}

export function IconQuote(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M10.3 7.2c-2.6 1.3-4.1 3.3-4.1 6 0 2.2 1.4 3.6 3.2 3.6 1.6 0 2.8-1.2 2.8-2.7 0-1.5-1-2.6-2.5-2.7.3-1.3 1.2-2.3 2.4-3l-1.8-1.2zm7.5 0c-2.6 1.3-4.1 3.3-4.1 6 0 2.2 1.4 3.6 3.2 3.6 1.6 0 2.8-1.2 2.8-2.7 0-1.5-1-2.6-2.5-2.7.3-1.3 1.2-2.3 2.4-3l-1.8-1.2z" />
    </svg>
  );
}

export function IconController(props: IconProps) {
  return (
    <Stroke {...props}>
      <rect x="2.75" y="7.25" width="18.5" height="9.75" rx="4.85" />
      <path d="M8 10.75v3M6.5 12.25h3" />
      <path d="M15.5 10.6h.01M17.9 13.1h.01" strokeWidth={2.2} />
    </Stroke>
  );
}

export function IconGrowth(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M3.5 4.5v13a2 2 0 0 0 2 2H20.5" />
      <path d="M7.5 14.5l3.5-4 3 2.5 4.5-5.5" />
      <path d="M15.75 7.5h2.75v2.75" />
    </Stroke>
  );
}

export function IconServer(props: IconProps) {
  return (
    <Stroke {...props}>
      <rect x="3.5" y="4" width="17" height="6.5" rx="2" />
      <rect x="3.5" y="13.5" width="17" height="6.5" rx="2" />
      <path d="M7 7.25h.01M7 16.75h.01" strokeWidth={2.2} />
      <path d="M13.5 7.25h3.75M13.5 16.75h3.75" />
    </Stroke>
  );
}

export function IconShieldCheck(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M12 3.25l6.75 2.7v5.05c0 4.3-2.9 7.3-6.75 8.75-3.85-1.45-6.75-4.45-6.75-8.75V5.95L12 3.25z" />
      <path d="M9.25 11.9l2 2 3.5-3.8" />
    </Stroke>
  );
}

export function IconLayers(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M12 3.5l8.5 4.75L12 13 3.5 8.25 12 3.5z" />
      <path d="M4.5 12.5L12 16.75l7.5-4.25" />
      <path d="M4.5 16.5L12 20.75l7.5-4.25" />
    </Stroke>
  );
}

export function IconCube(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M12 3l7.5 4.25v9.5L12 21l-7.5-4.25v-9.5L12 3z" />
      <path d="M12 12l7.5-4.25M12 12L4.5 7.75M12 12v9" />
    </Stroke>
  );
}

export function IconBriefcase(props: IconProps) {
  return (
    <Stroke {...props}>
      <rect x="3.5" y="7.5" width="17" height="12" rx="2.5" />
      <path d="M9 7.5V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5" />
      <path d="M3.5 12.25h17" />
    </Stroke>
  );
}

export function IconShieldLock(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M12 3.25l6.75 2.7v5.05c0 4.3-2.9 7.3-6.75 8.75-3.85-1.45-6.75-4.45-6.75-8.75V5.95L12 3.25z" />
      <circle cx="12" cy="10.25" r="1.75" />
      <path d="M12 12v2.75" />
    </Stroke>
  );
}

export function IconTerminal(props: IconProps) {
  return (
    <Stroke {...props}>
      <rect x="3" y="4.5" width="18" height="15" rx="2.5" />
      <path d="M7 9.5l3 2.5-3 2.5M12.5 14.5H17" />
    </Stroke>
  );
}

export function IconDiscord(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.317 4.37a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.865-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.058a.082.082 0 0 0 .031.056 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.291.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.3 12.3 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.84 19.84 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.331c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

export function IconGitHub(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2.5a9.75 9.75 0 0 0-3.08 19c.49.09.67-.21.67-.47v-1.86c-2.73.59-3.3-1.16-3.3-1.16-.45-1.14-1.09-1.44-1.09-1.44-.89-.61.07-.6.07-.6.98.07 1.5 1.01 1.5 1.01.88 1.5 2.3 1.07 2.86.82.09-.63.34-1.07.62-1.32-2.18-.25-4.47-1.09-4.47-4.82 0-1.07.38-1.94 1-2.62-.1-.25-.43-1.24.1-2.58 0 0 .82-.26 2.68 1a9.25 9.25 0 0 1 4.88 0c1.86-1.26 2.67-1 2.67-1 .54 1.34.2 2.33.1 2.58.63.68 1 1.55 1 2.62 0 3.74-2.3 4.56-4.48 4.81.35.31.67.91.67 1.84v2.72c0 .26.18.57.68.47A9.75 9.75 0 0 0 12 2.5Z" />
    </svg>
  );
}

export function IconCopy(props: IconProps) {
  return (
    <Stroke {...props}>
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M5 15h-.5A1.5 1.5 0 0 1 3 13.5v-9A1.5 1.5 0 0 1 4.5 3h9A1.5 1.5 0 0 1 15 4.5V5" />
    </Stroke>
  );
}

export function IconCheck(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M4.5 12.5l5 5 10-11" />
    </Stroke>
  );
}

export function IconMenu(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </Stroke>
  );
}

export function IconX(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </Stroke>
  );
}

export function IconArrowRight(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M4.5 12h15m0 0l-6-6m6 6l-6 6" />
    </Stroke>
  );
}
