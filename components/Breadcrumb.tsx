'use client';
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/20/solid';
import Link from "next/link";
import { usePathname } from 'next/navigation';
 
const BreadCrumb = () => {
    const pathname = usePathname();
    let currentLink = "";
    const pathnameNoLocale = pathname;
    const crumbs = pathnameNoLocale.split("/")
      .filter((crumb) => crumb !== "")
      .map((crumb) => {
        currentLink += `/${crumb}`;  
        return (
            <li key={crumb}>
            <div className="flex items-center">
              <ChevronRightIcon  width={15} height={15} />
              <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                <Link href={currentLink} >{crumb}</Link>
              </span>
            </div>
          </li>
        );
      });
  
  return (
    <nav className="max-w-7xl ml-[5rem] py-4 flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
          ><HomeIcon width={15} height={15}/>{" "}Home
          </Link>
        </li>
        {crumbs}
      </ol>
    </nav>
  );
}
export default BreadCrumb;
