import { BrandLogo } from "./BrandLogo";

export function Footer() {
  return (
    <footer className="border-t border-gray-500 bg-gray-900 flex-1 py-8 flex flex-col justify-center items-center xl:flex-row xl:justify-between">
      <div className="flex flex-col items-center xl:flex-row ">
        <BrandLogo />
        <span className="block text-gray-300 mt-4 xl:mt-0 xl:ml-6">Rocketseat - Todos os direitos reservados</span>
      </div>

      <span className="block text-gray-300 mt-6 xl:mt-0">Políticas de privacidade</span>
    </footer>
  )
}