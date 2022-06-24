import { BrandLogo } from "./BrandLogo";

export function Footer() {
  return (
    <footer className="flex-1 max-w-[68.75rem] mx-auto mt-6 p-6">
      <div className="border-t border-gray-300 flex flex-col pt-6 justify-center items-center xl:flex-row xl:justify-between">
        <div className="flex flex-col items-center xl:flex-row ">
          <BrandLogo />
          <span className="block text-gray-300 mt-4 xl:mt-0 xl:ml-6">Rocketseat - Todos os direitos reservados</span>
        </div>

        <span className="block text-gray-300 mt-6 xl:mt-0">Políticas de privacidade</span>
      </div>
    </footer>
  )
}