"use client"
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { BarsArrowUpIcon,ChevronDoubleUpIcon } from "@heroicons/react/24/outline";
import { useOuterClick } from "@/lib/useOuterClick";
// export const metadata = {
//   title: "Stockholm Convention",
//   description: "Create by XXXX",
// };

export default function StockholmLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  const [open, setOpen] = useState(false);
  const inneref = useOuterClick(()=>setOpen(false));
  // const closedButton = useRef(null);

  return (
    <div className="flex flex-row p-4 md:p-6 lg:p-12 max-w-full">
      <div className="relative">
      <button onClick={() => setOpen((isOpen) => !isOpen)} title="click to open submenu"
      className="fixed bottom-8 left-2 w-10 h-10 md:hidden" ref={inneref}> <ChevronDoubleUpIcon width={20} height={20} className={`rounded-full text-center text-gray-600 hover:ring-2 hover:ring-gray-300 focus:outline-none ${open && "rotate-180"}`}/>
      </button>
      <aside
        id="default-sidebar"
        className={`${open? "transition-opacity opacity-100 ease-linear duration-700 block left-8 ":"hidden opacity-0"} fixed top-0 md:left-0 z-40 w-64 h-screen md:sticky md:opacity-100 md:top-0 md:block`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li >
              <Link
                href="#"
                scroll={false}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="mx-auto"><BarsArrowUpIcon width={20} height={20}/></span>
              </Link>
            </li>
            <li>
              <Link
                href="#hiddenDanger"
                scroll={false}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="ml-3">สาร POPs ภัยเงียบใกล้ตัว</span>
              </Link>
            </li>
            <li>
              <Link
                href="#convention"
                scroll={false}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="ml-3">อนุสัญญาสตอกโฮล์ม</span>
              </Link>
            </li>
            <li>
              <Link
                href="#hbcd"
                scroll={false}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="ml-3">สาร HBCD</span>
              </Link>
            </li>
            <li>
              <Link
                href="#eps"
                scroll={false}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="ml-3">โฟม EPS และ XPS เกรดไม่ลามไฟ</span>
              </Link>
            </li>
            <li>
              <Link
                href="#reference"
                scroll={false}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="ml-3">เอกสารอ้างอิง</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
      </div>
      <div className="p-4 overflow-hidden">
        {children}
      </div>
    </div>
  );
}

