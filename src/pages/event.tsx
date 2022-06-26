import { useState } from "react";
import { useParams } from "react-router-dom";

import { Header } from "../components/Header";
import { SideBar } from "../components/SideBar";
import { Video } from "../components/Video";

export default function Event() {
  const { slug } = useParams<{ slug: string }>();
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className={`flex flex-col min-h-screen overflow-y-hidden 2xl:${toggleMenu ? (document.body.classList.add('overflow-hidden')) : (document.body.classList.remove('overflow-hidden'))}`}>
      < Header
        setToggleMenu={setToggleMenu}
        toggleMenu={toggleMenu}
      />
      <main className="flex flex-1">
        {
          slug ? <Video lessonSlug={slug} /> :
            <div className="flex-1"></div>
        }
        <div className="hidden lg:block lg:min-h-full">
          <SideBar
            setToggleMenu={setToggleMenu}
            toggleMenu={toggleMenu}
          />
        </div>
      </main>
    </div >
  )
}