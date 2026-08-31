export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">
      <main className="flex flex-col items-center gap-8">
        <h1 className="text-4xl font-bold">test-nextjs</h1>
        <p className="text-lg text-gray-600"></p>
        <div className="flex gap-4">
          <a
            href="/docs"
            className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
          >
            Documentation
          </a>
          <a
            href="/api/health"
            className="rounded-lg border border-gray-300 px-6 py-3 hover:bg-gray-50"
          >
            Health Check
          </a>
        </div>
      </main>
    </div>
  );
}
