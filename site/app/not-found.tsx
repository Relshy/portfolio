import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-6 pb-24 pt-32">
      <div className="text-center">
        <p className="font-mono text-sm text-ice/80">404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Nothing here.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base/7 text-mute">
          This page doesn't exist or has moved. The work and contact pages are
          the useful ones anyway.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          <Link href="/" className="btn btn-primary px-6 py-3">
            Back home
          </Link>
          <Link href="/work" className="btn btn-ghost px-6 py-3">
            View work
          </Link>
        </div>
      </div>
    </section>
  );
}
