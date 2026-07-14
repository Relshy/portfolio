"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, site } from "@/lib/site";
import { IconMenu, IconX } from "./Icons";

/** Trailing-slash-safe route comparison (static export uses trailing slashes). */
function normalize(path: string) {
  const trimmed = path.replace(/\/+$/, "");
  return trimmed === "" ? "/" : trimmed;
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = normalize(usePathname() ?? "/");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl transition-colors duration-300 ${
        scrolled || menuOpen
          ? "border-white/[0.08] bg-night/70"
          : "border-transparent bg-night/30"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
      >
        <Link
          href="/"
          className="flex items-center gap-2.5"
          aria-label={`${site.name} — home`}
        >
          <img
            src="/pfp.png"
            alt=""
            width={32}
            height={32}
            className="h-8 w-8 rounded-full ring-1 ring-white/15"
          />
          <span className="text-[0.9375rem] font-semibold tracking-tight">
            {site.name}
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`text-sm transition-colors ${
                    active ? "text-ink" : "text-mute hover:text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="btn btn-primary hidden sm:inline-flex"
          >
            Start a Commission
          </Link>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/[0.03] md:hidden"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? (
              <IconX className="h-5 w-5" />
            ) : (
              <IconMenu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Kept mounted and animated via CSS so navigation isn't interrupted
          by the menu unmounting mid-click. */}
      <div
        className={`grid transition-all duration-300 ease-out md:hidden ${
          menuOpen
            ? "visible grid-rows-[1fr] opacity-100"
            : "invisible grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <ul className="space-y-1 border-t border-white/[0.06] px-6 py-4">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`block rounded-lg px-3 py-2.5 text-[0.9375rem] transition-colors hover:bg-white/[0.04] ${
                      active ? "text-ink" : "text-mute hover:text-ink"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-2">
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="btn btn-primary w-full"
              >
                Start a Commission
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
