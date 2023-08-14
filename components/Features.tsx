import { FolderOpenIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import {
  GiFlamethrowerSoldier,
  GiRadarSweep,
  GiTargetShot,
  GiTimeBomb,
  GiTripleShells,
} from "react-icons/gi";

const featureList = [
  {
    name: "About POPs",
    description: "ความรู้ทั่วไปเกี่ยวกับสาร POPs",
    href: "/about",
    icon: GiTargetShot,
  },
  {
    name: "Stockholms Convention on POP",
    description: "Stockholm Convention on Persistent Organic Pollutants",
    href: "/stockholm",
    icon: GiTimeBomb,
  },
  {
    name: "PFAS Guidelines",
    description: "Guidelines สำหรับ PFAS",
    href: "/pfasGuide",
    icon: GiRadarSweep,
  },
  {
    name: "Fire fighting foam's POP PFAS DB",
    description: "List of fire fighting foam (Both positive and negative List)",
    href: "/pfasDB",
    icon: FolderOpenIcon,
  },
  {
    name: "HBCD Guidelines",
    description: "Guidelines สำหรับ HBCD",
    href: "/hbcdGuide",
    icon: GiFlamethrowerSoldier,
  },
  {
    name: "Resouces",
    description: "ทรัพยากรอื่น ๆ",
    href: "/resources",
    icon: GiTripleShells,
  },
];

export default function Features() {
  return (
    <div>
      <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
        {featureList.map((feature) => (
          <div key={feature.name} className="relative pl-16">
            <Link href={feature.href}>
              <dt className="text-base font-semibold leading-7 ">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary dark:bg-primary hover:transition-all ease-in-out duration-300 hover:scale-125">
                  <feature.icon
                    className="h-6 w-6 text-white"
                    aria-hidden="true" 
                  />
                </div>
                <div className="hover:font-extrabold">
                {feature.name}
                </div>
              </dt>
            </Link>
            <dd className="mt-2 text-base leading-7">{feature.description}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
