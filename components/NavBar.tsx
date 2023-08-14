import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";
import ThemeSwitch from "./theme/ThemeSwitch";

const NavBar = () => {
  const logoURL = "/popLogo.svg";
  const darkLogoURL = "/DarkLogo.svg";

  return (
    <header className="w-full  z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
        <Link href="/" className="flex justify-center items-center">
        <Image className="h-12 w-auto dark:hidden inline-block object-contain"
            src={logoURL}
            alt="Logo"
            width={118}
            height={18}
          />
          <Image
            className="h-12 w-auto hidden dark:inline-block object-contain"
            src={darkLogoURL}
            alt="Logo"
            width={118}
            height={18}
          />
        </Link>

        <CustomButton
          title="Sign in"
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white dark:bg-slate-800 min-w-[130px]"
        />
        <div className="px-2">
          <ThemeSwitch clsName="hidden md:block lg:block mr-auto order-1" />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
