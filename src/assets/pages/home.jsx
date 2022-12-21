import React from "react";
import BgHeader from "../components/bg-header";
import {
  RiLinkedinBoxFill,
  RiGithubFill,
  RiInstagramFill,
} from "react-icons/ri";
import { BsCursorFill } from "react-icons/bs";
import { MdDesignServices } from "react-icons/md";

import Avatar from "../images/avatar-min.png";
const Home = () => {
  return (
    <div>
      <header className=" w-full min-h-screen gradient relative flex flex-col items-center pb-10">
        <BgHeader />
        <nav className="flex w-full min-h-[36px] text-white items-center p-4 sm:p-8 justify-center z-[2]">
          <div className="container flex w-full max-w-5xl justify-between">
            <div className="logo w-10 h-10 text-[#131b23] bg-white rounded-full flex justify-center items-center font-bold">
              VR
            </div>
            <div className="menu  justify-center items-center flex-1 relative hidden sm:flex">
              <ul className="flex gap-14 uppercase text-sm">
                <li>
                  <a className=" hover:opacity-75 transition-opacity" href="#">
                    home
                  </a>
                </li>
                <li>
                  <a className=" hover:opacity-75 transition-opacity" href="#">
                    about
                  </a>
                </li>
                <li>
                  <a className=" hover:opacity-75 transition-opacity" href="#">
                    explorer
                  </a>
                </li>
                <li>
                  <a className=" hover:opacity-75 transition-opacity" href="#">
                    contact
                  </a>
                </li>
              </ul>
              <div className="socials flex absolute right-0">
                <ul>
                  <li className="flex gap-3 text-2xl">
                    <a
                      className=" cursor-pointer hover:text-[#989daa] hover:scale-90 transition-all"
                      href="#"
                    >
                      <RiLinkedinBoxFill />
                    </a>
                    <a
                      className=" cursor-pointer hover:text-[#989daa] hover:scale-90 transition-all"
                      href="#"
                    >
                      <RiGithubFill />
                    </a>
                    <a
                      className=" cursor-pointer hover:text-[#989daa] hover:scale-90 transition-all"
                      href="#"
                    >
                      <RiInstagramFill />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <div className="content-header flex flex-col justify-center items-center sm:mt-9 gap-2 z-[2] relative">
          <div className="w-full h-full absolute top-0 left-0 hidden sm:flex">
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
              href="#"
              className="button px-4 py-2 self-center rounded-md mt-4 text-xs sm:text-sm hover:bg-[#1b2631] cursor-pointer hover:text-white transition-all font-semibold bg-white max-w-[200px]"
            >
              Fale comigo
            </a>
          </div>
        </div>
      </header>
      <main className="w-full min-h-screen">
        <div className="about-area w-full min-h-screen px-6 py-10 sm:px-10 sm:py-14  flex ">
          <div className="text flex flex-col gap-1">
            <h4 className=" text-base sm:text-lg"> Sobre Mim</h4>
            <div className="content-principal max-w-xl">
              <h3 className="text-xl sm:text-3xl font-medium">
                Um pouco sobre minha jornada no mundo do desenvolvimento
              </h3>
              <p className="text-xs sm:text-sm mt-3">
                Desde 2017, estou envolvido no mundo do desenvolvimento de{" "}
                <b>frontend</b>, conciliando meu negócio próprio com o objetivo
                de ter uma oportunidade como desenvolvedor profissional.
              </p>
              <p className="text-xs sm:text-sm mt-3">
                Hoje me encontro 100% focado e me dedicando diariamente a
                alcançar esse sonho enquanto continuo aperfeiçoando minhas
                habilidades em{" "}
                <b>HTML, CSS, JavaScript, TypeScript, React JS e NodeJS</b>.
              </p>
            </div>
          </div>
          <div className="cards flex flex-col flex-wrap justify-center  sm:flex-row w-full mt-14 gap-4  items-center">
            <div className=" card c1 flex flex-col p-3 py-5 gap-3  w-screen max-w-[320px] sm:max-w-[360px]  min-h-[255px] sm:min-h-[285px] border-2 sm:border-4 border-[#1f2a35] rounded-md">
              <div className="header-card flex items-center gap-2">
                <MdDesignServices className="text-5xl" />
                <div className="title-card">
                  <h1 className="text-2xl sm:text-3xl font-bold relative after:w-full after:h-[5px] after:bg-red-400 after:absolute after:top-6 after:z-[-1] z-20 after:left-0">
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
            <div className=" card c2 flex flex-col p-3 py-5 gap-3  w-screen  max-w-[320px] sm:max-w-[360px]   min-h-[255px] sm:min-h-[285px] border-2 sm:border-4 border-[#1f2a35] rounded-md">
              <div className="header-card flex items-center gap-2">
                <MdDesignServices className="text-5xl" />
                <div className="title-card">
                  <h1 className="text-2xl sm:text-3xl font-bold relative after:w-full after:h-[5px] after:bg-green-400 after:absolute after:top-6 after:z-[-1] z-20 after:left-0">
                    JavaScript
                  </h1>
                </div>
              </div>
              <div className="text flex flex-col gap-4">
                <span className="text-sm font-semibold opacity-30">&#123;</span>
                <p className="text-xs sm:text-sm border-l-2 border-black border-opacity-30 pl-4">
                  Conhecimento consolidado nas ferramentas da linguagem, sendo
                  capaz de criar aplicações 100% interativas e funcionais.
                </p>
                <span className="text-sm font-semibold opacity-30">&#125;</span>
              </div>
            </div>

            <div className=" card c3 flex flex-col p-3 py-5 gap-3  w-screen  max-w-[320px] sm:max-w-[360px]   min-h-[255px] sm:min-h-[285px] border-2 sm:border-4  border-[#1f2a35] rounded-md">
              <div className="header-card flex items-center gap-2">
                <MdDesignServices className="text-5xl" />
                <div className="title-card">
                  <h1 className="text-2xl sm:text-3xl font-bold relative after:w-full after:h-[5px] after:bg-blue-400 after:absolute after:top-6 after:z-[-1] z-20 after:left-0">
                    ReactJS
                  </h1>
                </div>
              </div>
              <div className="text flex flex-col gap-4">
                <span className="text-sm font-semibold opacity-30">&#123;</span>
                <p className="text-xs sm:text-sm border-l-2 border-black border-opacity-30 pl-4">
                  Tenho experiência em utilizar diversas ferramentas do
                  ecossistema do React como os hooks para criar aplicações web
                  completas e escaláveis.
                </p>
                <span className="text-sm font-semibold opacity-30">&#125;</span>
              </div>
            </div>

            <div className=" card c4 flex flex-col p-3 py-5 gap-3  w-screen  max-w-[320px] sm:max-w-[360px]   min-h-[255px] sm:min-h-[285px] border-2 sm:border-4  border-[#1f2a35] rounded-md">
              <div className="header-card flex items-center gap-2">
                <MdDesignServices className="text-5xl" />
                <div className="title-card">
                  <h1 className="text-2xl sm:text-3xl font-bold relative after:w-full after:h-[5px] after:bg-orange-400 after:absolute after:top-6 after:z-[-1] z-20 after:left-0">
                    NodeJS
                  </h1>
                </div>
              </div>
              <div className="text flex flex-col gap-4 justify-center">
                <span className="text-sm font-semibold opacity-30">&#123;</span>
                <p className="text-xs sm:text-sm border-l-2 border-black border-opacity-30 pl-4">
                  Tenho experiência em utilizar diversas ferramentas do
                  ecossistema do React como os hooks para criar aplicações web
                  completas e escaláveis.
                </p>
                <span className="text-sm font-semibold opacity-30">&#125;</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
