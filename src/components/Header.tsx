import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="bg-gray-700 w-full flex items-center justify-center py-5 border-b border-gray-600">
      <Logo />
    </header>
  )
}