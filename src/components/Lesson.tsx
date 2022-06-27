import ptBR from 'date-fns/locale/pt-BR'
import { format, isPast, set } from 'date-fns';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames'

import { CheckCircle, Lock } from 'phosphor-react';

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class"
  setToggleMenu: (toggleMenu: boolean) => void;
  toggleMenu: boolean;
}

export function Lesson(props: LessonProps) {
  const { slug } = useParams<{ slug: string }>();

  const isLessonAvailable = isPast(props.availableAt);
  const availableAtFormatted = format(props.availableAt, "EEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR
  })

  const isActiveLesson = slug === props.slug;

  function handleCloseSidebar(event: React.MouseEvent) {
    if (window.innerWidth < 1024) {
      props.setToggleMenu(!props.toggleMenu);
    }
    !isLessonAvailable && event.preventDefault();
  }

  return (
    <Link
      to={`/event/lesson/${props.slug}`}
      className={`group ${!isLessonAvailable && "hover:cursor-not-allowed"}`}
      onClick={handleCloseSidebar}
    >
      <span className="text-gray-300 capitalize">
        {availableAtFormatted}
      </span>
      <div className={classNames('rounded border p-4 mt-2 z-10', {
        'border-green-500 bg-green-500 relative before:w-3 before:h-3 before:absolute before:bg-green-500 before:top-2/4 before:left-0 before:-translate-x-2/4 before:-translate-y-2/4 before:rotate-45 before:rounded-sm': isActiveLesson,
        'border-gray-500': !isActiveLesson,
        'group-hover:border-green-500': isLessonAvailable,
        'opacity-50': !isLessonAvailable
      })}>

        <header className="flex items-center justify-between">
          {
            isLessonAvailable ? (
              <span className={`text-sm text-blue-500 font-medium flex items-center gap-2 transitions-colors ${isActiveLesson ? 'text-white' : ''}`}>
                <CheckCircle size={20} />
                Conteúdo liberado
              </span>

            ) : (
              <span className={`text-sm text-orange-500 font-medium flex items-center gap-2`}>
                <Lock size={20} />
                Em breve
              </span>
            )
          }
          <span className={`text-xs rounded py-[0.125rem] px-2 uppercase text-white border border-green-300 font-bold transition-colors ${isActiveLesson ? ' border-white' : ''}`}>
            {props.type === 'live' ? 'ao vivo' : 'aula prática'}
          </span>
        </header>

        <strong className={`mt-5 block text-base transition-colors ${isActiveLesson ? 'text-white' : 'text-gray-200'}`}>
          {props.title}
        </strong>
      </div>
    </Link>
  )
}