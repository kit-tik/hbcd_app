import { HiOutlineWifi } from "react-icons/hi2";

export default function loading() {
  return (
    <div className="w-100 h-auto z-20 fixed top-40 left-40">
      <HiOutlineWifi className="w-40 h-40 text-red-300  animate-spin"/>...loading
    </div>
  )
}
