import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col min-w-[400px]">
      <div className="mx-auto relative w-full h-full min-h-[60vh] bg-transparent ">
        <div className=" absolute top-0  outline-none h-[70vh] pointer-events-none  after:rounded-t-3xl after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-[450px] after:bg-[url('/city.jpg')] dark:after:bg-[url('/sea.jpg')] after:bg-no-repeat after:bg-cover after:[clip-path:polygon(100%_0,100%_80%,0_100%,0_0%)]">
          <div className="w-[90vw] xl:w-[80vw] mx-auto h-full overflow-x-hidden -z-10 "></div>
        </div>
        <div className="absolute p-12 w-full md:w-4/5 min-w-[375px] h-full text-white bg-transparent bg-opacity-10   dark:bg-opacity-10 dark:bg-transparent ">
          <h2 className="rounded-sm bg-gradient-to-r px-2 from-secondary via-accent to-primary w-fit text-base font-semibold leading-relaxed text-white">
            เผยความเสี่ยงที่ซ่อนอยู่ด้วย
          </h2>
          <div className="backdrop-blur-[1px] bg-transparent  bg-black dark:bg-slate-700 dark:bg-opacity-5 bg-opacity-5 rounded-lg">
            <p className="mt-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl text-white md:leading-snug ">
              แนวปฏิบัติเพื่อการบ่งชี้สารมลพิษที่ตกค้างยาวนาน (POPs)
            </p>
          </div>
          <div className="backdrop-blur-[1px] bg-transparent shadow  bg-black dark:bg-slate-700 dark:bg-opacity-5 bg-opacity-5 rounded-lg">
            <p className="mt-6 text-md text-white font-semibold tracking-tight md:text-lg md:mt-8">
              เพิ่มศักยภาพการบ่งชี้สารมลพิษ HBCD และ PFA ในผลิตภัณฑ์
            </p>
          </div>
          <p className="mt-10 text-lg leading-6 hover:transition-all ease-in-out duration-300 hover:translate-x-2 ">
            <button className="round border-2 border-secondary hover: py-2 inline-block px-5 rounded  hover:font-bold bg-secondary/70 hover:bg-secondary/90 dark:bg-black/30 dark:text-white">
              เริ่มต้นเรียนรู้
            </button>
            <ChevronDoubleRightIcon className="inline-block w-12 text-secondary" />
          </p>
        </div>
      </div>
    </div>
  );
}
