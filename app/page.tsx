export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-6 text-center">
      <h1 className="text-4xl font-bold text-zinc-900">
        Modern Web Platform
      </h1>

      <p className="mt-4 max-w-xl text-lg text-zinc-600">
        A hands-on DevOps project built with Next.js, GitHub Actions,
        Docker, Terraform, monitoring, and cloud deployment.
      </p>

      <div className="mt-8 rounded-lg border bg-white p-6 shadow-sm">
        <p className="font-semibold text-zinc-900">
          DevOps journey
        </p>

        <p className="mt-2 text-zinc-600">
          Build → Test → Containerize → Automate → Deploy → Monitor
        </p>
      </div>
    </main>
  );
}
