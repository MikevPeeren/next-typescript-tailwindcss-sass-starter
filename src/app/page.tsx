import Image from "next/image";

export default function Home() {
  return (
    <div className="px-2">
      <main className="flex min-h-screen flex-1 flex-col items-center justify-center py-2">
        <h1 className="m-0 text-center text-7xl text-indigo-500 hover:underline focus:underline">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <p className="my-16 text-center text-2xl">
          Get started by editing{" "}
          <code className="rounded-2xl bg-gray-100 p-3 text-base">
            pages/index.js
          </code>
        </p>
        <div className="md:flex-unset flex max-w-3xl flex-wrap items-center justify-center">
          <a
            href="https://nextjs.org/docs"
            className="m-4 min-h-[200px] max-w-xs rounded-md border p-6 text-left no-underline transition-colors duration-700 ease-in-out hover:border-indigo-500 hover:text-indigo-500"
          >
            <h2 className="mb-8 text-2xl">Documentation &rarr;</h2>
            <p className="m-0 text-xl">
              Find in-depth information about Next.js features and API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn"
            className="m-4 min-h-[200px] max-w-xs rounded-md border p-6 text-left no-underline transition-colors duration-700 ease-in-out hover:border-indigo-500 hover:text-indigo-500"
          >
            <h2 className="mb-8 text-2xl">Learn &rarr;</h2>
            <p className="m-0 text-xl">
              Learn about Next.js in an interactive course with quizzes!
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="m-4 min-h-[200px] max-w-xs rounded-md border p-6 text-left no-underline transition-colors duration-700 ease-in-out hover:border-indigo-500 hover:text-indigo-500"
          >
            <h2 className="mb-8 text-2xl">Examples &rarr;</h2>
            <p className="m-0 text-xl">
              Discover and deploy boilerplate example Next.js projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="m-4 min-h-[200px] max-w-xs rounded-md border p-6 text-left no-underline transition-colors duration-700 ease-in-out hover:border-indigo-500 hover:text-indigo-500"
          >
            <h2 className="mb-8 text-2xl">Deploy &rarr;</h2>
            <p className="m-0 text-xl">
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>
      <footer className="flex h-[100px] w-full items-center justify-center border">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className="flex items-center justify-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className="ml-2 h-5">
            <Image
              className="ml-2"
              src="/vercel.svg"
              alt="Vercel Logo"
              width={72}
              height={16}
            />
          </span>
        </a>
      </footer>
    </div>
  );
}
