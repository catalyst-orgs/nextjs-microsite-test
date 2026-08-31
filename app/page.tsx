export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">
      <main className="flex flex-col items-center gap-8">
        <h1 className="text-4xl font-bold">nextjs-microsite-test</h1>
        <p className="text-lg text-gray-600">Simple Next.js frontend test app</p>
        <a
          href="/api/health"
          className="rounded-lg border border-gray-300 px-6 py-3 hover:bg-gray-50"
        >
          Health Check
        </a>
      </main>
    </div>
  );
}