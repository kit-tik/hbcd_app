import { Features, Hero } from "@/components";

export default function Index() {
  return (
    <>
      <Hero />
      <div className="w-full h-1/6">&nbsp;</div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <Features />
      </div>
    </>
  );
}
