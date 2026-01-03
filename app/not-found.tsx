import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen earth-bg text-white">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <div className="border-4 border-white bg-black/50 p-10 text-center">
          <div className="text-4xl font-semibold tracking-tight">Not found</div>
          <p className="mt-4 text-white/75">
            The thing you were looking for doesn’t exist (in this simulation).
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex border-4 border-white bg-white px-6 py-4 text-lg font-semibold text-black hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/70"
          >
            Back to Earth Reviews
          </Link>
        </div>
      </div>
    </div>
  );
}


