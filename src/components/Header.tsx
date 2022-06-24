import { List } from "phosphor-react";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="px-6 bg-gray-700 w-full flex items-center justify-between py-5 border-b border-gray-600 lg:justify-center transition-all">
      <Logo />

      <a href="#" className="lg:hidden">
        <span className="flex flex-row gap-2 items-center text-sm text-gray-100">
          Aulas
          <List size={32} className="text-blue-500" />
        </span>
      </a>
    </header>
  )
}