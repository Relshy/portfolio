import Link from "next/link";
import { navLinks, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <img
              src="/pfp.png"
              alt=""
              width={32}
              height={32}
              className="h-8 w-8 rounded-full ring-1 ring-white/15"
            />
            <div>
              <p className="text-sm font-semibold tracking-tight">{site.name}</p>
              <p className="text-xs text-mute">{site.role}</p>
            </div>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-mute transition-colors hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="mt-10 text-xs text-mute/80">
          © {new Date().getFullYear()} {site.name}. All rights reserved.{" "}
          <span aria-hidden>·</span>{" "}
          <a
            href={site.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-ink"
          >
            GitHub
          </a>{" "}
          <span aria-hidden>·</span>{" "}
          <Link
            href="/terms"
            className="transition-colors hover:text-ink"
          >
            Terms
          </Link>
        </p>
      </div>
    </footer>
  );
}
