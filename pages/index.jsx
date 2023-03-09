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
              With +4 years of experience developing Frontend applications
              Javascript with React.js, Next.js Framework, Redux.js, Tailwind
              CSS, SASS or Bootstrap, Backend with Node.js, express.js and
              MongoDB, Blockchain with Ethers.js, Smart Contracts, Solidity or
              Binance API and virtual environments with Three.js integrated with
              blockchain networks.
            </p>
            <a
              href="/docs/Resume%20-%20Jair%20Pérez.pdf"
              className="mt-5 font-semibold inline-block md:text-lg"
              target="_blank"
            >
              <div className="flex items-center space-x-2 group">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500 group-hover:text-black">
                  See resume
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
          <h2 className="text-2xl lg:text-3xl font-medium">Habilities</h2>
          <div className="mt-4">
            <h3 className="text-xl lg:text-2xl font-medium">
              Frameworks - Tools
            </h3>
            <p className="mt-3 text-base lg:text-lg font-light max-w-prose">
              <span className="block">
                <b className="font-semibold">Advanced:</b> React, Next.js,
                Ethers.js, Web3.js, Binance API, Vercel, Tailwind CSS,
                Bootstrap, JSON, Web API.
              </span>
              <span className="block">
                <b className="font-semibold">Intermediate:</b> Node.js, Git,
                Gitflow, MongoDB, express.js, AWS, Redux.js, Three.js JWT, SASS,
                Remix, Solidity.
              </span>
              <span className="block">
                <b className="font-semibold">Basic:</b> Angular 2+, GraphQL,
                Typescript, Docker, Python.
              </span>
            </p>
          </div>
          <div className="mt-4">
            <h3 className="text-xl lg:text-2xl font-medium">Lenguages</h3>
            <p className="mt-3 text-base lg:text-lg font-light">
              Javascript, Solidity, CSS, SASS, HTML.
            </p>
          </div>
        </div>
        <div className="mt-10">
          <h2 className="text-2xl lg:text-3xl font-medium">Experience</h2>
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
              Web3 Frontend - <i>Abril, 2021 - March, 2023</i>
            </span>
            <p className="text-base lg:text-lg font-light">
              Front-end Blockchain Developer, Support in project management and
              requirements analysis for Web 3 and Blockchain applications,
              integration and Blockchain, integration and implementation with
              web3.js, ethers.js, Binance API, MetaMask, Smart Contract or
              Solidity.
            </p>
            <span className="text-base lg:text-lg font-light mt-6 block">
              <b className="font-semibold">Tecnologies:</b> React.js, Next.js,
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
              Frontend - <i>September, 2021 - October, 2022</i>
            </span>
            <span className="text-base lg:text-lg font-light block text-gray-600 my-2">
              Ontario, Canadá
            </span>
            <p className="text-base lg:text-lg font-light">
              Frontend Developer, web application designer with Ant Design and
              Bootstrap, integration with APIs and implementation with React and
              Redux, support in project management and requirements analysis for
              software requirements for software implementation.
            </p>
            <span className="text-base lg:text-lg font-light mt-6 block">
              <b className="font-semibold">Tecnologies:</b> React.js, Redux.js,
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
              Frontend - <i>August, 2019 - September, 2021</i>
            </span>
            <p className="text-base lg:text-lg font-light">
              Frontend developer, web page and web application designer and
              integration of APIs with the Frontend.
            </p>
            <ul className="text-base font-light list-disc p-6 px-8">
              <li>
                Reduce by 80% the delivery time of web sites to the customer
                thanks to Vercel
              </li>
              <li>Reduce layout time by 40% with Tailwind CSS</li>
              <li>
                Increased development efficiency by 70% thanks to Git flow
              </li>
            </ul>
            <span className="text-base lg:text-lg font-light">
              <b className="font-semibold">Tecnologies:</b> Next.js, React.js,
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
          <h2 className="text-2xl lg:text-3xl font-medium">Projects</h2>
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
            <i>December, 2022</i>
            <p className="text-base lg:text-lg font-light">
              Platform of courses on realstate.
            </p>
            <span className="text-base lg:text-lg block mt-4 font-light">
              <b className="font-semibold">Tecnologies:</b> Next.js, React.js,
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
            <i>November, 2022</i>
            <p className="text-base lg:text-lg font-light">
              Test e-commerce to accept cryptocurrencies payments, integrating
              Paytoshi payment processor.
            </p>
            <span className="text-base lg:text-lg block mt-4 font-light">
              <b className="font-semibold">Tecnologies:</b> Next.js, React.js,
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
              <i>April, 2021</i>
              <p className="text-base lg:text-lg font-light">
                Platform of courses on finance.
              </p>
              <span className="text-base lg:text-lg block mt-4 font-light">
                <b className="font-semibold">Tecnologies:</b> Next.js, React.js,
                Bootstrap, express.js, MongoDB, Vercel
              </span>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <h2 className="text-2xl lg:text-3xl font-medium">Technical Tests</h2>
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
                <i>January, 2023</i>
              </div>
              <p className="text-base lg:text-lg font-light">
                Dashboard with Pokemons list and login page.
              </p>
              <span className="text-base lg:text-lg block mt-4 font-light">
                <b className="font-semibold">Tecnologies:</b> Next.js, React.js,
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
                <i>November, 2022</i>
              </div>
              <p className="text-base lg:text-lg font-light">
                Landing page about recipes.
              </p>
              <span className="text-base lg:text-lg block mt-4 font-light">
                <b className="font-semibold">Tecnologies:</b> React.js,
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
                <i>September, 2021</i>
              </div>
              <p className="text-base lg:text-lg font-light">
                E-commerce about shoes.
              </p>
              <span className="text-base lg:text-lg block mt-4 font-light">
                <b className="font-semibold">Tecnologies:</b> React.js, CSS,
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
                <i>May, 2021</i>
              </div>
              <p className="text-base lg:text-lg font-light">
                Dashboard about sales record with filtering option.
              </p>
              <span className="text-base lg:text-lg block mt-4 font-light">
                <b className="font-semibold">Tecnologies:</b> React.js, Next.js,
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
                <i>July, 2020</i>
              </div>
              <p className="text-base lg:text-lg font-light">
                Suscription website resources for children.
              </p>
              <span className="text-base lg:text-lg block mt-4 font-light">
                <b className="font-semibold">Tecnologies:</b> React.js, Next.js,
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
          <h2 className="text-2xl lg:text-3xl font-medium">Prototypes</h2>
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
              <i>September, 2021</i>
              <p className="text-base lg:text-lg font-light">
                Landing for NFTs collection.
              </p>
              <span className="text-base lg:text-lg block mt-4 font-light">
                <b className="font-semibold">Tecnologies:</b> Figma
              </span>
            </div>
            <div className="py-8">
              <a
                href="https://www.figma.com/proto/BzdYAC5JEkHiCR8R9nCy5a/portfolio?node-id=1%3A2&scaling=min-zoom&page-id=0%3A1"
                target="_blank"
                className="text-base lg:text-lg mr-1"
              >
                <b className="font-semibold mr-1">Portfolio</b>
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
              <i>August, 2021</i>
              <p className="text-base lg:text-lg font-light">
                Personal portfolio.
              </p>
              <span className="text-base lg:text-lg block mt-4 font-light">
                <b className="font-semibold">Tecnologies:</b> Figma
              </span>
            </div>
          </div>
        </div>
        <div className="mt-10 font-light mb-8">
          <h2 className="text-2xl lg:text-3xl font-medium">Education</h2>
          <span className="text-base lg:text-lg mt-4 block">
            <b className="font-semibold mr-1">Tecnológico San Agustín</b>-
            Montería, Colombía
          </span>
          <i className="text-base lg:text-lg">Graphic Design, Jun 2019</i>
          <span className="text-base lg:text-lg mt-4 block">
            <b className="font-semibold mr-1">
              Universidad Pontificia Bolivariana
            </b>
            - Montería, Colombía
          </span>
          <i className="text-base lg:text-lg">Computer Engineer, Jul 2014</i>
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
