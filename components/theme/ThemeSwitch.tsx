"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {BsMoonFill, BsSun} from 'react-icons/bs'

const ThemeSwitch = ({clsName}:{clsName: string|undefined}) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className={`flex items-center justify-center rounded-lg transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-700 ${clsName}`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <BsSun className="h-5 w-5 text-orange-300" />
      ) : (
        <BsMoonFill className="h-5 w-5 text-slate-800" />
      )}
    </button>
  );
  // return (
  // <select value={theme} onChange={e => setTheme(e.target.value)}>
  //   <option value="system">System</option>
  //   <option value="dark">Dark</option>
  //   <option value="light">Light</option>
  // </select>
  // )
};

export default ThemeSwitch;
