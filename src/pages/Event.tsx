import { useState } from "react";
import { useParams } from "react-router-dom";
import Lottie from "react-lottie";
import austronautMascot from "../lotties/mascot-astronaut-in-rocket.json";

import { Header } from "../components/Header";
import { SideBar } from "../components/SideBar";
import { Video } from "../components/Video";

export function Event() {
  const { slug } = useParams<{ slug: string }>();
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className={`flex flex-col min-h-screen overflow-y-hidden ${toggleMenu ? (document.body.classList.add('overflow-hidden')) : (document.body.classList.remove('overflow-hidden'))}`}>
      < Header
        setToggleMenu={setToggleMenu}
        toggleMenu={toggleMenu}
      />
      <main className="flex flex-1">
        {
          slug ? <Video lessonSlug={slug} /> :
            <div className="flex-1 pt-8 flex flex-col items-center">
              <Lottie
                options={{
                  animationData: austronautMascot,
                  autoplay: true,
                  loop: true
                }}
                width={250}
                height={250}
              />
              <span>
                Embarque no foquete e vamos nessa! 💚
              </span>
            </div>
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