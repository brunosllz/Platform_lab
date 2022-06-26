import { List, X } from "phosphor-react";
import { Logo } from "./Logo";
import { SideBar } from "./SideBar";

interface HeaderProps {
  setToggleMenu: (toggleMenu: boolean) => void;
  toggleMenu: boolean;
}

export function Header({ toggleMenu, setToggleMenu }: HeaderProps) {
  return (
    <header className="px-6 bg-gray-700 w-full flex items-center justify-between py-5 border-b border-gray-600 lg:justify-center transition-all">
      <Logo />

      <nav className="lg:hidden">
        <span className="flex flex-row gap-2 items-center text-sm text-gray-100">
          Aulas
          {
            toggleMenu ?
              <X size={32} className="text-blue-500" onClick={() => setToggleMenu(!toggleMenu)} />
              :
              <List size={32} className="text-blue-500" onClick={() => setToggleMenu(!toggleMenu)} />

          }
        </span>
      </nav>

      {toggleMenu ? (
        <nav className="overflow-scroll lg:hidden pb-20 z-[100] fixed top-[4.6875rem] right-0 w-full h-full bg-gray-700 translate-x-0 transition-all duration-500 ease-in-out">
          <SideBar
            setToggleMenu={setToggleMenu}
            toggleMenu={toggleMenu}
          />
        </nav>
      ) : (
        <nav className="z-[100] fixed top-[4.6875rem] right-0 w-full h-full bg-gray-700 translate-x-full transition-all duration-500 ease-in-out">
          <SideBar
            setToggleMenu={setToggleMenu}
            toggleMenu={toggleMenu}
          />
        </nav>
      )
      }
    </header>
  )
}