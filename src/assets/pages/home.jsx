import React, { useState, useEffect } from "react";
import BgHeader from "../components/bg-header";
import {
  RiLinkedinBoxFill,
  RiGithubFill,
  RiInstagramFill,
} from "react-icons/ri";
import { BsCursorFill } from "react-icons/bs";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

import { HiBars3 } from "react-icons/hi2";

import { MdDesignServices } from "react-icons/md";
import Avatar from "../images/avatar-min.png";
const Home = () => {
  useEffect(() => {
    ScrollReveal().reveal(".about-area");

    ScrollReveal().reveal(".content-header", { delay: 2000 });
  }, []);
  const [pageY, setPageY] = useState(0);
  const [scrollTop, SetScrollTop] = useState(false);
  const [closeMenu, SetCloseMenu] = useState(true);

  document.addEventListener("scroll", () => {
    if (window.scrollY >= 100) {
      SetScrollTop(true);
    } else {
      SetScrollTop(false);
    }
  });

  const [translate, setTranslate] = useState(0);
  const prevFunc = () => {
    const cl = document.querySelectorAll('.card-project')
    console.log(372 * cl.length);
    setTranslate(translate - 375);
    console.log(translate);
  };
  const nextFunc = () => {
    setTranslate(translate + 375);
    console.log(translate);
  };
  return (
    <div>
      <header className=" w-full min-h-screen gradient relative flex flex-col items-center pb-10">
        <BgHeader />
        <nav
          className={`navHeader flex w-full min-h-[36px] text-white items-center p-4 sm:p-4 justify-center z-[998] ${
            scrollTop && closeMenu ? "menuFixed" : `menuRelative`
          }`}
        >
          <div className="container flex w-full max-w-5xl justify-between items-center">
            <div className="logo w-10 h-10 text-[#131b23] bg-white rounded-full flex justify-center items-center font-bold">
              VR
            </div>
            <div
              className={`menu   justify-center items-center flex-1 gap-6 sm:gap-0   flex flex-col  sm:flex-row  h-screen sm:h-full fixed sm:relative top-0 left-0 w-full bg-[#1B2631] sm:bg-transparent  z-[900] ${
                closeMenu
                  ? "translate-y-[-100vh] sm:translate-y-[0]"
                  : "translate-y-[0]"
              } transition-transform`}
            >
              <AiOutlineClose
                onClick={() => {
                  SetCloseMenu(!closeMenu);
                }}
                className="sm:hidden absolute top-0 right-0 m-8 text-xl"
              />
              <ul className="flex gap-14 uppercase text-xs flex-col sm:flex-row">
                <li>
                  <a
                    onClick={() => {
                      SetCloseMenu(true);
                    }}
                    className=" hover:opacity-75 transition-opacity"
                    href="#"
                  >
                    home
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      SetCloseMenu(true);
                    }}
                    className=" hover:opacity-75 transition-opacity"
                    href="#about"
                  >
                    about
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      SetCloseMenu(true);
                    }}
                    className=" hover:opacity-75 transition-opacity"
                    href="#"
                  >
                    explorer
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      SetCloseMenu(true);
                    }}
                    className=" hover:opacity-75 transition-opacity"
                    href="#"
                  >
                    contact
                  </a>
                </li>
              </ul>
              <div className="socials flex relative top-6 sm:top-0 sm:absolute sm:right-0">
                <ul>
                  <li className="flex gap-3 text-2xl">
                    <a
                      className=" cursor-pointer hover:text-[#989daa] hover:scale-90 transition-all"
                      href="https://www.linkedin.com/in/viniciosragazzi/"
                      target="_blank"
                    >
                      <RiLinkedinBoxFill />
                    </a>
                    <a
                      className=" cursor-pointer hover:text-[#989daa] hover:scale-90 transition-all"
                      href="https://github.com/viniciosragazzi"
                      target="_blank"
                    >
                      <RiGithubFill />
                    </a>
                    <a
                      className=" cursor-pointer hover:text-[#989daa] hover:scale-90 transition-all"
                      href="https://www.instagram.com/viniciosragazzi_/"
                      target="_blank"
                    >
                      <RiInstagramFill />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <HiBars3
              className="sm:hidden"
              onClick={() => {
                SetCloseMenu(!closeMenu);
              }}
            />
          </div>
        </nav>
        <div className="h-screen flex flex-col 2xl:justify-center">
          <div
            className={`content-header flex flex-col justify-center items-center sm:mt-9 gap-2 z-[100] relative ${
              scrollTop && closeMenu ? "top-14" : ``
            }`}
          >
            <div className="w-full h-full absolute top-0 left-0 hidden -z-10 sm:flex">
              <div className="">
                <BsCursorFill className="text-white absolute top-24 right-28 z-20 " />
                <span className="text-white px-3 py-1 rounded-md absolute top-20 right-4 z-10 bg-[#1b2631]">
                  Front End
                </span>
              </div>
              <div className="">
                <BsCursorFill className="text-white absolute top-40 left-0 z-20 " />
                <span className="text-white px-3 py-1 rounded-md absolute top-36 left-4 z-10 bg-[#1b2631]">
                  Web Designer
                </span>
              </div>
            </div>
            <div className="avatar w-full h-full max-w-[130px] sm:max-w-[150px] object-cover relative bg-[#1b2631] rounded-full overflow-hidden ">
              <img src={Avatar} alt="avatar" className="w-[120%] scale-125" />
            </div>
            <div className="content flex flex-col text-center gap-1 max-w-2xl p-4 sm:p-0">
              <h2 className="text-white font-semibold  text-xl sm:text-2xl">
                Vinicios Ragazzi
              </h2>
              <p className="text-xs font-medium text-[#737d8b]">
                Desenvolvedor FrontEnd
              </p>
              <h1 className="text-white text-2xl sm:text-5xl mt-2 text-center  font-semibold sm:mt-6">
                Construindo o futuro da web, um pixel de cada vez.
              </h1>
              <p className="text-[#737d8b] text-xs mt-1 sm:mt-4">
                Apaixonado por transformar ideias em realidade através do código
                focando em criar experiências incríveis, seja através de design
                atraente ou soluções de tecnologia inovadoras.{" "}
              </p>

              <a
                href="https://cdn.discordapp.com/attachments/524765307081064452/1055159207340552212/Nome_Marcos_Vinicios_Ragazzi_Araujo_Data_de_Nascimento_24022001_Naturalidade_Nova_Iguacu_RJ_-_Brasil_Disponibilidade_Periodo_Integral_Contato_21_98337-3765_O_Email_viniciosragazzzigmail.com_LinkedIn_viniciosra.pdf"
                className="button px-4 py-2 self-center rounded-md mt-4 text-xs sm:text-sm hover:bg-[#1b2631] cursor-pointer hover:text-white transition-all font-semibold bg-white max-w-[200px]"
                download
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </header>
      <main className="w-full min-h-screen">
        <div
          id="about"
          className="about-area w-full min-h-screen px-6 sm:px-10 sm:py-14  flex justify-center "
        >
          <div className="container flex  py-24">
            <div className="text flex flex-col gap-1">
              <h4 className=" text-base sm:text-lg"> Sobre Mim</h4>
              <div className="content-principal max-w-xl">
                <h3 className="text-xl sm:text-3xl font-semibold">
                  Um pouco sobre minha jornada no mundo do desenvolvimento
                </h3>
                <p className="text-xs sm:text-sm mt-3">
                  Desde 2017, estou envolvido no mundo do desenvolvimento de{" "}
                  <b>frontend</b>, conciliando meu negócio próprio com o
                  objetivo de ter uma oportunidade como desenvolvedor
                  profissional.
                </p>
                <p className="text-xs sm:text-sm mt-3">
                  Hoje me encontro 100% focado e me dedicando diariamente a
                  alcançar esse sonho enquanto continuo aperfeiçoando minhas
                  habilidades em{" "}
                  <b>HTML, CSS, JavaScript, TypeScript, React JS e NodeJS</b>.
                </p>
              </div>
            </div>
            <div className="cards flex flex-col flex-wrap justify-center  sm:flex-row w-full mt-14 sm:mt-6 gap-4  items-center">
              <div className=" card c1 flex flex-col p-3 py-5 gap-3  w-screen max-w-[320px] sm:max-w-[360px]  min-h-[255px] border-2 sm:border-4 border-[#1f2a35] rounded-md">
                <div className="header-card flex items-center gap-2">
                  <MdDesignServices className="text-4xl" />
                  <div className="title-card">
                    <h1 className="text-2xl sm:text-2xl font-bold relative after:w-full after:h-[5px] after:bg-red-400 after:absolute after:top-6 after:z-[-1] z-20 after:left-0">
                      HTML e CSS
                    </h1>
                  </div>
                </div>
                <div className="text flex flex-col gap-4">
                  <span className="text-sm font-semibold opacity-30">
                    &lt;h1&gt;{" "}
                  </span>
                  <p className="text-xs sm:text-sm border-l-2 border-black border-opacity-30 pl-4">
                    Habilidades sólidas no desenvolvimento de sistemas web 100%
                    responsivos e otimizadas, colocando em prática práticas como
                    acessibilidade e CEO.
                  </p>
                  <span className="text-sm font-semibold opacity-30">
                    &lt;/h1&gt;{" "}
                  </span>
                </div>
              </div>
              <div className=" card c2 flex flex-col p-3 py-5 gap-3  w-screen  max-w-[320px] sm:max-w-[360px]   min-h-[255px] border-2 sm:border-4 border-[#1f2a35] rounded-md">
                <div className="header-card flex items-center gap-2">
                  <MdDesignServices className="text-4xl" />
                  <div className="title-card">
                    <h1 className="text-2xl sm:text-2xl font-bold relative after:w-full after:h-[5px] after:bg-green-400 after:absolute after:top-6 after:z-[-1] z-20 after:left-0">
                      JavaScript
                    </h1>
                  </div>
                </div>
                <div className="text flex flex-col gap-4">
                  <span className="text-sm font-semibold opacity-30">
                    &#123;
                  </span>
                  <p className="text-xs sm:text-sm border-l-2 border-black border-opacity-30 pl-4">
                    Conhecimento consolidado nas ferramentas da linguagem, sendo
                    capaz de criar aplicações 100% interativas e funcionais.
                  </p>
                  <span className="text-sm font-semibold opacity-30">
                    &#125;
                  </span>
                </div>
              </div>

              <div className=" card c3 flex flex-col p-3 py-5 gap-3  w-screen  max-w-[320px] sm:max-w-[360px]   min-h-[255px] border-2 sm:border-4  border-[#1f2a35] rounded-md">
                <div className="header-card flex items-center gap-2">
                  <MdDesignServices className="text-4xl" />
                  <div className="title-card">
                    <h1 className="text-2xl sm:text-2xl font-bold relative after:w-full after:h-[5px] after:bg-blue-400 after:absolute after:top-6 after:z-[-1] z-20 after:left-0">
                      ReactJS
                    </h1>
                  </div>
                </div>
                <div className="text flex flex-col gap-4">
                  <span className="text-sm font-semibold opacity-30">
                    &#123;
                  </span>
                  <p className="text-xs sm:text-sm border-l-2 border-black border-opacity-30 pl-4">
                    Tenho experiência em utilizar diversas ferramentas do
                    ecossistema do React como os hooks para criar aplicações web
                    completas e escaláveis.
                  </p>
                  <span className="text-sm font-semibold opacity-30">
                    &#125;
                  </span>
                </div>
              </div>

              <div className=" card c4 flex flex-col p-3 py-5 gap-3  w-screen  max-w-[320px] sm:max-w-[360px]   min-h-[255px] border-2 sm:border-4  border-[#1f2a35] rounded-md">
                <div className="header-card flex items-center gap-2">
                  <MdDesignServices className="text-4xl" />
                  <div className="title-card">
                    <h1 className="text-2xl sm:text-2xl font-bold relative after:w-full after:h-[5px] after:bg-orange-400 after:absolute after:top-6 after:z-[-1] z-20 after:left-0">
                      NodeJS
                    </h1>
                  </div>
                </div>
                <div className="text flex flex-col gap-4 justify-center">
                  <span className="text-sm font-semibold opacity-30">
                    &#123;
                  </span>
                  <p className="text-xs sm:text-sm border-l-2 border-black border-opacity-30 pl-4">
                    Tenho experiência em utilizar diversas ferramentas do
                    ecossistema do React como os hooks para criar aplicações web
                    completas e escaláveis.
                  </p>
                  <span className="text-sm font-semibold opacity-30">
                    &#125;
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="projects w-full flex min-h-[50vh] px-6 py-10 sm:px-10 sm:py-14 flex-col relative">
          <div className="header flex flex-col gap-2">
            <h1 className="text-xl sm:text-3xl text-white font-semibold">
              Principais Projetos{" "}
            </h1>

            <p className=" text-sm text-white">
              Algums dos principais projetos que venho desenvolvendo nos ultimos
              dias.
            </p>
          </div>
          <div className="carousel w-full mt-5 flex  overflow-hidden">
            <MdNavigateBefore
              className="absolute text-white top-[50%] left-0 text-6xl -translate-y-1/2 opacity-50"
              onClick={() =>nextFunc() }
            />

            <MdNavigateNext
              className="absolute text-white top-[50%] right-0 text-6xl -translate-y-1/2  opacity-50"
              onClick={() => prevFunc()}
            />
            <div
              className={`carousel-list flex  gap-3 relative transition-transform`}
              style={{ transform: `translateX(${translate}px)` }}
       
            >
              <div className="card-project min-w-[360px]  h-[320px] bg-red-600"></div>
              <div className="card-project min-w-[360px]  h-[320px] bg-green-600"></div>
              <div className="card-project min-w-[360px]  h-[320px] bg-yellow-600"></div>
              <div className="card-project min-w-[360px]  h-[320px] bg-red-600"></div>
              <div className="card-project min-w-[360px]  h-[320px] bg-blue-600"></div>
              <div className="card-project min-w-[360px]  h-[320px] bg-red-600"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
