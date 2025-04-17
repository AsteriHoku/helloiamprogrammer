import Image from "next/image";

export default function Home() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start grid-rows-1">
                <Image
                    className="w-full h-auto max-w-xs sm:max-w-md"
                    src="/HelloCardHighResPic.png"
                    alt="I am a programmer business card"
                    width={400}
                    height={100}
                    priority
                />
                <div className="flex gap-8 flex-wrap items-center justify-evenly w-full">
                    <p>Go to my...</p>
                    <a className=""
                       href="https://github.com/asterihoku"
                       target="_blank"
                    >GitHub</a>
                    <a className=""
                       href="https://www.linkedin.com/in/sarah-matta"
                       target="_blank"
                    >LinkedIn</a>
                    <a className=""
                       href="https://sessionize.com/sarah-matta/"
                       target="_blank"
                    >Sessionize</a>
                </div>
            </main>
            <footer>
            </footer>
        </div>
    );
}
