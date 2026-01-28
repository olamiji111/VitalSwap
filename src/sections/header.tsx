import React from "react";
import { Dark } from "../components/icons/iconst";

const Header = () => {
  return (
    <header>

      <img
        height={100}
        alt="vitalswap"
        src="/vitalswap-logo-.svg"
        width={100}
      />
      <div className="absolute left-[240px] top-0 h-full w-px bg-zinc-300" />
      <div className="flex-center gap-x-3 space-x-2 px-2">
        <div className="border border-transparent px-3  py-1.5 gap-1.5 rounded-full flex-center bg-green-100 ">
          <span className="inline-flex h-3 w-3 rounded-full bg-green-500"></span>
          <span className='uppercase  text-green-700 text-xs'> ACTIVE</span>
        </div>
        <Dark
          className="h-4 w-4 text-zinc-500"
        />
        <div className="h-5.5 w-px bg-zinc-300" />
        <div className="col-end">
          <p className="text-foreground text-xs"> Akinsola Jegede </p>
          <span className="text-xs text-zinc-500"> Admin</span>
        </div>
        <div className="h-7 w-7 rounded-full flex-center bg-white-50 text-primary-700 text-xs font-semibold">
          AJ
        </div>

      </div>


    </header>
  )
}

export default Header;
