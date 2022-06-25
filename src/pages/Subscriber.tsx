import { gql, useMutation, useQuery } from "@apollo/client";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Logo } from "../components/Logo";
import { ReactLogo } from "../components/ReactLogo";

const CREATE_SUBSCRIBER_MUTATION = gql`
  mutation createSubscriber ($name: String!, $email: String!) {
    createSubscriber(data: {name: $name, email: $email}) {
      id
    }
  }
`;

const GET_LESSONS_QUERY = gql`
  query GetLessons {
    lessons(orderBy: id_ASC) {
      slug
      id
    }
  }
`

interface GetLessons {
  lessons: {
    id: string;
    slug: string;
  }[]
}

export function Subscriber() {
  const navigate = useNavigate()

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [createSubscriber, { loading }] = useMutation(CREATE_SUBSCRIBER_MUTATION);
  const { data } = useQuery<GetLessons>(GET_LESSONS_QUERY);

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
      <div className="absolute">
        <ReactLogo />
      </div>
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto z-10">
        <div className="max-w-[640px]">
          <Logo />

          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React JS</strong>
          </h1>

          <p className="mt-4 text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
          </p>
        </div>

        <div className="p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>

          <form onSubmit={handleSubscriber} className="flex flex-col gap-2 w-full">
            <input
              className={`bg-gray-900 font-normal rounded px-5 h-14 outline-none transition-colors focus:ring-1 focus:ring-green-500 hover:ring-1 hover:ring-green-500`}
              type="text"
              placeholder="Seu nome completo"
              onChange={event => setName(event.target.value)}
            />
            <input
              className="bg-gray-900 font-normal rounded px-5 h-14 outline-none transition-colors focus:ring-1 focus:ring-green-500 hover:ring-1 hover:ring-green-500"
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

      <img className="mt-10" src="/src/assets/code-template.png" alt="" />

      <div className="min-w-full px-6 bg-gray-900">
        <Footer />
      </div>
    </div>
  )
}