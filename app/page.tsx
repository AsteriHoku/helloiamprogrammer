import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="w-full h-auto max-w-xs sm:max-w-md"
          src="/IamProgrammer.png"
          alt="I am a programmer business card"
          width={300}
          height={100}
          priority
        />
      </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
            Go to my...
            <a className=""
               href="https://github.com/asterihoku"
               target="_blank"
            >GitHub</a>
            <a className=""
               href="https://www.linkedin.com/in/sarah-matta"
               target="_blank"
            >LinkedIn</a>
        </footer>
    </div>
  );
}
