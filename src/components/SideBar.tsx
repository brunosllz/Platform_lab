import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";


interface SideBarProps {
  setToggleMenu: (toggleMenu: boolean) => void;
  toggleMenu: boolean;
}


export function SideBar({ setToggleMenu, toggleMenu }: SideBarProps) {
  const { data } = useGetLessonsQuery();

  return (
    <aside className='w-full lg:-[21.75rem] bg-gray-700 border-l border-gray-600 p-6 min-h-full'>
      <span className='text-white font-bold text-2xl pb-6 mb-6 border-b border-gray-600 block'>
        Cronograma de aulas
      </span>

      <div className='flex flex-col gap-8'>
        {data?.lessons.map(lesson => {
          return (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
              setToggleMenu={setToggleMenu}
              toggleMenu={toggleMenu}
            />
          )
        })}
      </div>
    </aside>
  )
}