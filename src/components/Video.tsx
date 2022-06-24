import { useState } from "react";
import { DefaultUi, Player, Youtube } from "@vime/react";
import { gql, useQuery } from "@apollo/client";

import '@vime/core/themes/default.css'

import { Footer } from "./Footer";
import { CaretRight, CircleNotch, DiscordLogo, FileArrowDown, Image, Lightning } from "phosphor-react";

const GET_LESSON_BY_SLUG_QUERY = gql`
  query GetLessonBySlug($slug: String) {
  lesson(where: {slug: $slug}) {
    title
    id
    description
    videoId
    teacher {
      name
      bio
      avatarURL
    }
  }
}
`

interface GetLessonBySlugResponse {
  lesson: {
    title: string;
    videoId: string;
    description: string;
    teacher: {
      name: string;
      bio: string;
      avatarURL: string;
    }
  }
}

interface VideoProps {
  lessonSlug: string;
}

export function Video(props: VideoProps) {
  const [isloading, setIsLoading] = useState(false);


  const { data } = useQuery<GetLessonBySlugResponse>(GET_LESSON_BY_SLUG_QUERY, {
    variables: {
      slug: props.lessonSlug
    }
  });

  if (!data) {
    return (
      <div className="flex-1 justify-end flex p-3" >
        <CircleNotch size={24} className="animate-spin text-gray-200" />
      </div >
    )
  }


  console.log(data.lesson.videoId)
  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[68.75rem] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId={data.lesson.videoId} key={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-8 max-w-[68.75rem] mx-auto">
        <div className="flex flex-col items-start gap-16 lg:flex-row">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">
              {data.lesson.title}
            </h1>
            <p className="mt-4 text-gray-200  leading-relaxed">
              {data.lesson.description}
            </p>

            <div className="flex items-center gap-4 mt-6">
              <img
                className="h-16 w-16 rounded-full border-2 border-blue-500"
                src={data.lesson.teacher.avatarURL}
                alt=""
              />

              <div className="leading-relaxed">
                <strong className="font-bold text-lg block">{data.lesson.teacher.name}</strong>
                <span className="text-gray-200 text-sm block">{data.lesson.teacher.bio}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full sm:max-w-[667.2px] sm:mx-auto lg:w-[237px]">
            <a href="#" className="p-4 text-xs bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors">
              <DiscordLogo size={24} />
              comunidade do discord
            </a>

            <a href="#" className="p-4 text-xs border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors">
              <Lightning size={24} />
              acesse o desafio
            </a>
          </div>
        </div>

        <div className="gap-8 mt-20 grid grid-rows-2 mx-auto sm:max-w-[667.2px] xl:grid xl:grid-cols-2 xl:grid-rows-none xl:min-w-full">
          <a href="#" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
            <div className="bg-green-700 h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-lg md:text-2xl">Material complementar</strong>
              <p className="text-xs text-gray-200 mt-2 sm:text-sm">Acesse o material complementar para acelerar o seu desenvolvimento</p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>

          <a href="#" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
            <div className="bg-green-700 h-full p-6 flex items-center">
              <Image size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-lg md:text-2xl">Wallpapers exclusivos</strong>
              <p className="text-xs text-gray-200 mt-2 sm:text-sm">Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina</p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>
        </div>
      </div>

      <div className="mt-12 max-w-[68.75rem] mx-auto px-8">
        <Footer />
      </div>
    </div>
  );
}