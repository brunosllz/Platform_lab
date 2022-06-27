import { FormEvent, useState, } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateSubscriberMutation, useGetSlugLessonsQuery } from "../graphql/generated";

import { Footer } from "../components/Footer";
import { Logo } from "../components/Logo";

export function Subscriber() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [createSubscriber, { loading }] = useCreateSubscriberMutation();
  const { data } = useGetSlugLessonsQuery();

  async function handleSubscriber(event: FormEvent) {
    event.preventDefault();

    await createSubscriber({
      variables: {
        name,
        email
      }
    });

    navigate(`/event/lesson/${data?.lessons[0].slug}`);
  }

  return (
    <div className="bg-blur min-h-screen bg-no-repeat bg-cover flex flex-col items-center">
      <div className="absolute overflow-hidden min-h-screen">
        <img
          src='https://res.cloudinary.com/dhexs29hy/image/upload/v1656268866/Ignite_Lab/ReactJS_icon.png'
        />
      </div>

      <div className="w-full max-w-[1216px] items-center justify-between mt-20 mx-auto z-10 md:flex-row md:flex">
        <div className="max-w-[640px] flex flex-col mx-6 items-center md:items-start">
          <Logo />

          <h1 className="mt-8 text-[1.875rem] leading-tight text-center md:text-left">
            Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React JS</strong>
          </h1>

          <p className="mt-4 text-gray-200 leading-relaxed text-center text-sm md:text-left">
            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
          </p>
        </div>

        <div className="p-8 bg-gray-700 border border-gray-500 rounded mt-8 md:mr-2 md:w-[391px]">
          <strong className="text-lg mb-6 block">Inscreva-se gratuitamente</strong>

          <form onSubmit={handleSubscriber} className="flex flex-col gap-2 w-full">
            <input
              required
              className="bg-gray-900 font-normal rounded px-5 h-14 outline-none transition-colors focus:ring-1 focus:ring-green-500"
              type="text"
              placeholder="Seu nome completo"
              onChange={event => setName(event.target.value)}
            />
            <input
              required
              className="bg-gray-900 font-normal rounded px-5 h-14 outline-none transition-colors focus:ring-1 focus:ring-green-500"
              type="email"
              placeholder="Digite seu email"
              onChange={event => setEmail(event.target.value)}
            />

            <button
              type="submit"
              disabled={loading}
              className=" mt-4 bg-green-500 uppercase py-4 rounded text-sm hover:bg-green-700 transitions-colors disabled:opacity-50"
            >
              garantir minha vaga
            </button>
          </form>
        </div>
      </div>

      <div className="mx-2 mt-10">
        <img src="https://res.cloudinary.com/dhexs29hy/image/upload/v1656268877/Ignite_Lab/code-template.png" alt="" />
      </div>

      <div className="min-w-full px-6 bg-gray-900">
        <Footer />
      </div>
    </div>
  )
}