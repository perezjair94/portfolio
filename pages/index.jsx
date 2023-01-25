import Image from "next/image";
import Layout from "@/components/Layout";
import SocialLink from "@/components/SocialLink";
import ProjectCard from "@/components/ProjectCard";
import TechnicalTestCard from "@/components/TechincalTestCard";

function Home() {
  return (
    <Layout>
      <div className="max-w-screen-lg mx-auto px-8 md:px-10">
        <div className="py-8">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-lg md:text-2xl">
              Jair Pérez
            </span>
            <div className="flex items-center">
              <div className="flex space-x-3 items-center">
                <SocialLink
                  link="https://instagram.com/perezjair94"
                  source="/icons/instagram.svg"
                />
                <SocialLink
                  link="https://github.com/perezjair94"
                  source="/icons/github.svg"
                />
                <SocialLink
                  link="https://www.linkedin.com/in/perezjair94/"
                  source="/icons/linkedin.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-lg mx-auto px-8 md:px-10">
        <div className="grid md:grid-cols-3 gap-5 lg:gap-0">
          <div className="max-w-lg order-2 md:col-span-2">
            <h2 className="text-2xl lg:text-3xl font-semibold">
              Front-end Developer
            </h2>
            <span className="text-lg font-medium">
              Javascript, React.js, Next.js, Web3.js
            </span>
            <p className="text-base lg:text-lg mt-4 font-light">
              Con +4 años de experiencia elaborando aplicaciones Frontend
              Javascript con React.js, Framework Next.js, Redux.js, Tailwind
              CSS, SASS o Bootstrap, Backend con Node.js, express.js y MongoDB,
              Blockchain con Ethers.js, Smart Contracts, Solidity o Binance API
              y entornos virtuales con Three.js integrados con redes blockchain.
            </p>
            <a
              href="/docs/CV%20-%20Jair%20Pérez.pdf"
              className="mt-5 font-semibold inline-block md:text-lg"
              target="_blank"
            >
              <div className="flex items-center space-x-2 group">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500 group-hover:text-black">
                  Ver curriculum
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-pink-500 group-hover:text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </a>
          </div>
          <div className="relative h-40 w-40 lg:h-64 lg:w-64 md:ml-auto order-1 md:order-2">
            <Image
              layout="fill"
              src="/images/photo.jpg"
              className="rounded-full"
              objectFit="cover"
              objectPosition="center"
              quality={80}
            />
          </div>
        </div>
        <div className="mt-14">
          <h2 className="text-2xl lg:text-3xl font-medium">Habilidades</h2>
          <div className="mt-4">
            <h3 className="text-xl lg:text-2xl font-medium">
              Frameworks - Tools
            </h3>
            <p className="mt-3 text-base lg:text-lg font-light max-w-prose">
              <span className="block">
                <b className="font-semibold">Avanzado:</b> React, Next.js,
                Ethers.js, Web3.js, Binance API, Vercel, Tailwind CSS,
                Bootstrap, JSON, Web API.
              </span>
              <span className="block">
                <b className="font-semibold">Intermedio:</b> Node.js, Git,
                Gitflow, MongoDB, express.js, AWS, Redux.js, Three.js JWT, SASS,
                Remix, Solidity.
              </span>
              <span className="block">
                <b className="font-semibold">Básico:</b> Angular 2+, GraphQL,
                Typescript, Docker, Python.
              </span>
            </p>
          </div>
          <div className="mt-4">
            <h3 className="text-xl lg:text-2xl font-medium">Lenguajes</h3>
            <p className="mt-3 text-base lg:text-lg font-light">
              Javascript, Solidity, CSS, SASS, HTML.
            </p>
          </div>
        </div>
        <div className="mt-10">
          <h2 className="text-2xl lg:text-3xl font-medium">Experiencia</h2>
          <div className="mt-10 max-w-prose">
            <a
              href="https://www.bancacrypto.money/"
              target="_blank"
              className="text-base lg:text-lg mr-1"
            >
              <b className="font-semibold mr-1">BancaCrypto</b>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline-flex"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              ,
            </a>
            <span className="text-base lg:text-lg block md:inline-block">
              Freelancer - <i>Abril, 2021 - Presente</i>
            </span>
            <p className="text-base lg:text-lg font-light">
              Desarrollador Front-end Blockchain, Apoyo en la gestión de
              proyectos y análisis de los requisitos para aplicaciónes Web 3 y
              Blockchain, integración e implementación con web3.js, ethers.js,
              Binance API, MetaMask, Smart Contract o Solidity.
            </p>
            <span className="text-base lg:text-lg font-light mt-6 block">
              <b className="font-semibold">Tecnologias:</b> React.js, Next.js,
              TailwindCSS, Vercel, Solidity, Ethers.js, Web3.js, Binance API,
              Remix, Smart Contracts
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10 pb-6 border-b">
            <ProjectCard
              title="BancaCrypto"
              link="https://bancacrypto.money"
              image="bancacrypto.png"
            />
            <ProjectCard
              title="CapitalInvestment"
              link="https://capitalinvestmenttm.com/"
              image="capitalinvestment.png"
            />
          </div>
          <div className="mt-6 max-w-prose pb-6 border-b">
            <a
              href="https://www.draketech.ca/"
              target="_blank"
              className="text-base lg:text-lg mr-1"
            >
              <b className="font-semibold mr-1">DrakeTech</b>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline-flex"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              ,
            </a>
            <span className="text-base lg:text-lg block md:inline-block">
              Frontend - <i>Septiembre, 2021 - October, 2022</i>
            </span>
            <span className="text-base lg:text-lg font-light block text-gray-600 my-2">
              Ontario, Canadá
            </span>
            <p className="text-base lg:text-lg font-light">
              Desarrollador Frontend, maquetador de aplicaciones web con Ant
              Design y Bootstrap, integración con APIs e implementación con
              React y Redux, apoyo en la gestión de proyectos y análisis de los
              requisitos para aplicación de programas.
            </p>
            <span className="text-base lg:text-lg font-light mt-6 block">
              <b className="font-semibold">Tecnologias:</b> React.js, Redux.js,
              Javascript, JSON, JWT, Web API Ant Design, Bootstrap, Git, Git
              flow
            </span>
          </div>
          <div className="mt-6 max-w-prose">
            <a
              href="https://startupslabagencia.co"
              target="_blank"
              className="text-base lg:text-lg mr-1"
            >
              <b className="font-semibold mr-1">Startups Lab - Agencia</b>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline-flex"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              ,
            </a>
            <span className="text-base lg:text-lg block md:inline-block">
              Frontend - <i>Agosto, 2019 - Septiembre, 2021</i>
            </span>
            <p className="text-base lg:text-lg font-light">
              Desarrollador Frontend, maquetador de páginas y aplicaciones web e
              integración de APIs con el Frontend.
            </p>
            <ul className="text-base font-light list-disc p-6 px-8">
              <li>
                Reduje en 80% el tiempo de entrega de webs al cliente gracias
                Vercel
              </li>
              <li>
                Reduje en un 40% el tiempo de maquetación gracias a Tailwind CSS
              </li>
              <li>
                Aumentó en 70% la eficiencia de desarrollo gracias a Git flow
              </li>
            </ul>
            <span className="text-base lg:text-lg font-light">
              <b className="font-semibold">Tecnologias:</b> Next.js, React.js,
              Tailwind CSS, Bootstrap, Vercel
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10">
            <ProjectCard
              title="Casa10"
              link="https://micasa10.co"
              image="casa10.png"
            />
            {/* <ProjectCard
              title="Neutro"
              link="https://wearered.co/neutro"
              image="neutro.jpg"
            /> */}
          </div>
        </div>
        <div id="projects" />
        <div className="mt-20">
          <h2 className="text-2xl lg:text-3xl font-medium">Proyectos</h2>
          <div className="border-b py-8 max-w-prose">
            <a
              href="https://superhost.vercel.app/"
              target="_blank"
              className="text-base lg:text-lg mr-1"
            >
              <b className="font-semibold mr-1">Superhost</b>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline-flex"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>{" "}
              -
            </a>
            <i>Diciembre, 2022</i>
            <p className="text-base lg:text-lg font-light">
              Plataforma de cursos sobre realstate.
            </p>
            <span className="text-base lg:text-lg block mt-4 font-light">
              <b className="font-semibold">Tecnologias:</b> Next.js, React.js,
              Tailwind CSS, express.js, MongoDB, Vercel, Paytoshi
            </span>
          </div>
          <div className="border-b py-8 max-w-prose">
            <a
              href="https://paytoshi-commerce.vercel.app/"
              target="_blank"
              className="text-base lg:text-lg mr-1"
            >
              <b className="font-semibold mr-1">Paytoshi Commerce</b>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline-flex"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>{" "}
              -
            </a>
            <i>Noviembre, 2022</i>
            <p className="text-base lg:text-lg font-light">
              E-commerce de prueba para aceptar pagos con criptomonedas,
              integrando el procesador de pagos Payotshi.
            </p>
            <span className="text-base lg:text-lg block mt-4 font-light">
              <b className="font-semibold">Tecnologias:</b> Next.js, React.js,
              Tailwind CSS, express.js, MongoDB, Vercel, Paytoshi
            </span>
          </div>
          <div className="max-w-prose">
            <div className="py-8">
              <a
                href="https://bybmc.co"
                target="_blank"
                className="text-base lg:text-lg mr-1"
              >
                <b className="font-semibold mr-1">BMC Quant</b>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline-flex"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>{" "}
                -
              </a>
              <i>Abril, 2021</i>
              <p className="text-base lg:text-lg font-light">
                Plataforma de cursos financieros.
              </p>
              <span className="text-base lg:text-lg block mt-4 font-light">
                <b className="font-semibold">Tecnologias:</b> Next.js, React.js,
                Bootstrap, express.js, MongoDB, Vercel
              </span>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <h2 className="text-2xl lg:text-3xl font-medium">Pruebas técnicas</h2>
          <div className="py-8">
            <div className="max-w-prose">
              <div className="flex items-center gap-x-2">
                <div className="flex items-center">
                  <a
                    href="https://monoma-test.vercel.app/"
                    className="text-base lg:text-lg mr-1"
                    target="_blank"
                  >
                    <b className="font-semibold mr-1">
                      Pkemon Dashboard (Monoma)
                    </b>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 inline-flex"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/perezjair94/monoma-test"
                    target="_blank"
                  >
                    <img src="/icons/github.svg" className="h-5" />
                  </a>
                </div>
                <span> - </span>
                <i>Enero, 2023</i>
              </div>
              <p className="text-base lg:text-lg font-light">
                Dashboard con lista de Pokemons y pagina de iniciar sesión.
              </p>
              <span className="text-base lg:text-lg block mt-4 font-light">
                <b className="font-semibold">Tecnologias:</b> Next.js, React.js,
                Typescript, Tailwind CSS, Twin.macro
              </span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10">
              <TechnicalTestCard
                title="Monoma"
                link="https://monoma-test.vercel.app/"
                image="/monoma/1.png"
              />
              <TechnicalTestCard
                title="Monoma"
                link="https://monoma-test.vercel.app/"
                image="/monoma/2.png"
              />
            </div>
          </div>
          <div className="py-8">
            <div className="max-w-prose">
              <div className="flex items-center gap-x-2">
                <div className="flex items-center">
                  <a
                    href="https://monoma-test.vercel.app/"
                    className="text-base lg:text-lg mr-1"
                    target="_blank"
                  >
                    <b className="font-semibold mr-1">
                      Landing Recetas (Aranda)
                    </b>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 inline-flex"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/perezjair94/aranda"
                    target="_blank"
                  >
                    <img src="/icons/github.svg" className="h-5" />
                  </a>
                </div>
                <span> - </span>
                <i>Noviembre, 2022</i>
              </div>
              <p className="text-base lg:text-lg font-light">
                Landing page sobre recetas.
              </p>
              <span className="text-base lg:text-lg block mt-4 font-light">
                <b className="font-semibold">Tecnologias:</b> React.js,
                Typescript, SASS
              </span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10">
              <TechnicalTestCard
                title="Aranda"
                link="https://aranda.vercel.app/"
                image="/aranda/1.png"
              />
              <TechnicalTestCard
                title="Aranda"
                link="https://aranda.vercel.app/"
                image="/aranda/2.png"
              />
            </div>
          </div>
          <div className="py-8">
            <div className="max-w-prose">
              <div className="flex items-center gap-x-2">
                <div className="flex items-center">
                  <a
                    href="https://shop-example-two.vercel.app/"
                    className="text-base lg:text-lg mr-1"
                    target="_blank"
                  >
                    <b className="font-semibold mr-1">Shoes Shop (DrakeTech)</b>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 inline-flex"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/perezjair94/e-commerce-wtih-semantic-ui-react"
                    target="_blank"
                  >
                    <img src="/icons/github.svg" className="h-5" />
                  </a>
                </div>
                <span> - </span>
                <i>Septiembre, 2021</i>
              </div>
              <p className="text-base lg:text-lg font-light">
                Landing page sobre recetas.
              </p>
              <span className="text-base lg:text-lg block mt-4 font-light">
                <b className="font-semibold">Tecnologias:</b> React.js, CSS,
                Semantic UI, SWR
              </span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10">
              <TechnicalTestCard
                title="Shoes Shop"
                link="https://shop-example-two.vercel.app/"
                image="/draketech/1.png"
              />
              <TechnicalTestCard
                title="Shoes Shop"
                link="https://shop-example-two.vercel.app/"
                image="/draketech/2.png"
              />
            </div>
          </div>
          <div className="py-8">
            <div className="max-w-prose">
              <div className="flex items-center gap-x-2">
                <div className="flex items-center">
                  <a
                    href="https://shop-example-two.vercel.app/"
                    className="text-base lg:text-lg mr-1"
                    target="_blank"
                  >
                    <b className="font-semibold mr-1">Dashboard (Bold)</b>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 inline-flex"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/perezjair94/e-commerce-wtih-semantic-ui-react"
                    target="_blank"
                  >
                    <img src="/icons/github.svg" className="h-5" />
                  </a>
                </div>
                <span> - </span>
                <i>Mayo, 2021</i>
              </div>
              <p className="text-base lg:text-lg font-light">
                Dashboard sobre registro de ventas con opciones de filtro.
              </p>
              <span className="text-base lg:text-lg block mt-4 font-light">
                <b className="font-semibold">Tecnologias:</b> React.js, Next.js,
                Tailwind CSS
              </span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10">
              <TechnicalTestCard
                title="Dashboard"
                link="https://test-bold.vercel.app/"
                image="/bold/1.png"
              />
              <TechnicalTestCard
                title="Dashboard"
                link="https://test-bold.vercel.app/"
                image="/bold/2.png"
              />
            </div>
          </div>
          <div className="py-8">
            <div className="max-w-prose">
              <div className="flex items-center gap-x-2">
                <div className="flex items-center">
                  <a
                    href="https://shop-example-two.vercel.app/"
                    className="text-base lg:text-lg mr-1"
                    target="_blank"
                  >
                    <b className="font-semibold mr-1">Winki (Starupslab)</b>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 inline-flex"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/perezjair94/e-commerce-wtih-semantic-ui-react"
                    target="_blank"
                  >
                    <img src="/icons/github.svg" className="h-5" />
                  </a>
                </div>
                <span> - </span>
                <i>Julio, 2020</i>
              </div>
              <p className="text-base lg:text-lg font-light">
                Sitio web suscripciónes recurosos para niños.
              </p>
              <span className="text-base lg:text-lg block mt-4 font-light">
                <b className="font-semibold">Tecnologias:</b> React.js, Next.js,
                Tailwind CSS
              </span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10">
              <TechnicalTestCard
                title="Winki"
                link="https://winki.vercel.app/"
                image="/starupslab/1.png"
              />
              <TechnicalTestCard
                title="Winki"
                link="https://winki.vercel.app/"
                image="/starupslab/2.png"
              />
              <TechnicalTestCard
                title="Winki"
                link="https://winki.vercel.app/"
                image="/starupslab/3.png"
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h2 className="text-2xl lg:text-3xl font-medium">Prototipos</h2>
          <div className="max-w-prose">
            <div className="border-b py-8">
              <a
                href="https://www.figma.com/proto/yKNob6ZJhx6KShtbEtRUly/LandingNFT?node-id=1%3A3&scaling=scale-down-width&page-id=0%3A1"
                target="_blank"
                className="text-base lg:text-lg mr-1"
              >
                <b className="font-semibold mr-1">Landing NFT</b>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline-flex"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>{" "}
                -
              </a>
              <i>Septiembre, 2021</i>
              <p className="text-base lg:text-lg font-light">
                Landing para colección de NFTs.
              </p>
              <span className="text-base lg:text-lg block mt-4 font-light">
                <b className="font-semibold">Tecnologias:</b> Figma
              </span>
            </div>
            <div className="py-8">
              <a
                href="https://www.figma.com/proto/BzdYAC5JEkHiCR8R9nCy5a/portfolio?node-id=1%3A2&scaling=min-zoom&page-id=0%3A1"
                target="_blank"
                className="text-base lg:text-lg mr-1"
              >
                <b className="font-semibold mr-1">Portafolio</b>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline-flex"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>{" "}
                -
              </a>
              <i>Agosto, 2021</i>
              <p className="text-base lg:text-lg font-light">
                Portafolio personal.
              </p>
              <span className="text-base lg:text-lg block mt-4 font-light">
                <b className="font-semibold">Tecnologias:</b> Figma
              </span>
            </div>
          </div>
        </div>
        <div className="mt-10 font-light mb-8">
          <h2 className="text-2xl lg:text-3xl font-medium">Educacíon</h2>
          <span className="text-base lg:text-lg mt-4 block">
            <b className="font-semibold mr-1">Tecnológico San Agustín</b>-
            Montería, Colombía
          </span>
          <i className="text-base lg:text-lg">Diseñador Gráfico, Jun 2019</i>
        </div>
        <div className="my-14 hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div>
              <div className="h-44 bg-gray-100 rounded-md" />
              <div className="flex space-x-4 mt-4 items-center">
                <div className="h-16 w-16 rounded-full bg-gray-300" />
                <div>
                  <h3 className="text-xl font-semibold">Jesus Ricardo</h3>
                  <span className="text-base">Fullstack Developer</span>
                </div>
              </div>
            </div>
            <div>
              <div className="h-44 bg-gray-100 rounded-md" />
              <div className="flex space-x-4 mt-4 items-center">
                <div className="h-16 w-16 rounded-full bg-gray-300" />
                <div>
                  <h3 className="text-xl font-semibold">Paola Rohanes</h3>
                  <span className="text-base">Administradora de empresas</span>
                </div>
              </div>
            </div>
            <div>
              <div className="h-44 bg-gray-100 rounded-md">
                <p className="p-10 font-light">
                  Jair Pérez aprende rápido y es muy apasionado en lo que hace,
                  le gustan los retos y me sorprende mucho su resiliencia.
                </p>
              </div>
              <div className="flex space-x-4 mt-4 items-center">
                <div className="h-16 w-16 rounded-full bg-gray-300" />
                <div>
                  <h3 className="text-xl font-semibold">Neifer García</h3>
                  <span className="text-base">Backend Developer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
