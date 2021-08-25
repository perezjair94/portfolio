import Image from 'next/image'
import Link from 'next/link'
import Layout from "@/components/Layout"
import SocialLink from '@/components/SocialLink'
import ProjectCard from '@/components/ProjectCard'
import HeroCard from '@/components/HeroCard'

function Home() {
  return (
    <Layout>
      <div className="max-w-screen-xl mx-auto px-8 md:px-10">
        <div className="py-8">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-lg md:text-2xl">Jair Oquendo</span>
            <div className="flex items-center">
              <span className="mx-4 font-medium hidden md:inline-block">oquendojair10@gmail.com</span>
              <div className="flex space-x-3 items-center">
                <SocialLink 
                  link="https://instagram.com/oquendojair10"
                  source="/icons/instagram.svg"
                />
                <SocialLink 
                  link="https://github.com/oquendojair10"
                  source="/icons/github.svg"
                />
                <SocialLink 
                  link="https://www.linkedin.com/in/oquendojair10/"
                  source="/icons/linkedin.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-8 md:px-10">
        <div className="grid md:grid-cols-2 gap-5 lg:gap-0">
          <div className="max-w-lg">
            <h2 className="text-2xl lg:text-3xl font-medium">Desarrollador Forntend</h2>
            <span className="text-lg font-medium">Javascript, React.js, Next.js</span>
            <p className="text-base lg:text-lg mt-4 font-light">
              Con +2 años de experiencia elaborando aplicaciones 
              Frontend Javascript con React.js, Framework Next.js, 
              Redux.js, TailwindCSS, SASS o Bootstrap y Backend 
              con Node.js, express.js y MongoDB.
            </p>
            <a 
              href="/docs/CV%20-%20Jair%20.pdf" 
              className="bg-black rounded-md p-2 px-8 mt-5 inline-block"
              download
            >
              <span className="text-white">Descargar CV</span>
            </a>
          </div>
          <div className="mt-10 md:mt-0">
            <div className="max-w-lg ml-auto">
              <HeroCard 
                title="Elmatch"
                link="https://elmatchtv.com"
              >
                Sitio web y blog de la comunidad de fútbol.
              </HeroCard>
              <HeroCard 
                title="Food Template"
                link="https://project-f.vercel.app"
              >
                Sitio web y blog de la comunidad de fútbol.
              </HeroCard>
              <Link href="/#projects">
                <a>
                  <div className="flex space-x-2 mt-4">
                    <span className="font-medium">Proyectos</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto mt-14">
          <div className="bg-gray-50 rounded-lg">
            <div className="p-8 md:p-14 lg:px-16 flex flex-col md:flex-row">
              <div className="md:hidden lg:inline-block">
                <div className="relative h-40 w-40 lg:h-64 lg:w-64">
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
              <div className="mt-4 lg:p-8 lg:px-14">
                <h2 className="text-xl md:text-2xl font-medium">Sobre mí</h2>
                <p className="text-base lg:text-lg font-light mt-3">
                  Tengo 27 años, vivo en Monteria - Cordoba, soy fanatico del fútbol y 
                  fan del ChelseaFC, co-creador de la cumnidad de fútbol Elmatch, 
                  durante varios años he aprendido mucho sobre desarrollo web y he 
                  tenido experiencia elaborando E-Commerce e integración con
                  pasarelas de pago, blogs, Landing page, por último he desplegado 
                  aplicaciones en las plataformas Vercel, Heroku y AWS
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-14">
          <h2 className="text-2xl lg:text-3xl font-medium">Habilidades</h2>
          <div className="mt-4">
            <h3 className="text-xl lg:text-2xl font-medium">Frameworks - Tools</h3>
            <p className="mt-3 text-base lg:text-lg font-light">
              <span className="block"><b className="font-semibold">Avanzado:</b> React, Next.js, Vercel, TailwindCSS, Bootstrap, JSON, Web API.</span> 
              <span className="block"><b className="font-semibold">Intermedio:</b> Node.js. Git, Gitflow, MongoDB, express.js, AWS, Redux.js, JWT, SASS.</span> 
              <span className="block"><b className="font-semibold">Básico:</b> Angular 2+, GraphQL, Typescript, Docker, Python.</span>
            </p>
          </div>
          <div className="mt-4">
            <h3 className="text-xl lg:text-2xl font-medium">Lenguajes</h3>
            <p className="mt-3 text-base lg:text-lg font-light">
              Javascript, CSS, SASS, HTML.
            </p>
          </div>
        </div>
        <div className="mt-10">
          <h2 className="text-2xl lg:text-3xl font-medium">Experiencia</h2>
          <div className="mt-6 max-w-prose">
            <a 
              href="https://startupslabagencia.co" 
              target="_blank"
              className="text-base lg:text-lg mr-1"
            >
              <b className="font-semibold mr-1">Startups Lab - Agencia</b>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-flex" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>,
            </a>
            <span className="text-base lg:text-lg block md:inline-block">
              Frontend - <i>Agosto, 2019-Presente</i>
            </span>
            <p className="text-base lg:text-lg font-light">
              Desarrollador Frontend, maquetador de páginas y aplicaciones web e 
              integración de APIs con el Frontend.
            </p>
            <ul className="text-base font-light list-disc p-6 px-8">
              <li>Reduje en 80% el tiempo de entrega de webs al cliente gracias Vercel</li>
              <li>Reduje en un 40% el tiempo de maquetación gracias a Tailwind CSS</li>
              <li>Aumentó en 70% la eficiencia de desarrollo gracias a Git flow</li>
            </ul>
            <span className="text-base lg:text-lg font-light"><b className="font-semibold">Tecnologias:</b> Next.js, React.js, TailwindCSS, Bootstrap, Vercel</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10">
            <ProjectCard 
              title="Casa10"
              link="https://micasa10.co"
              image="casa10.png"
            />
            <ProjectCard 
              title="SORS"
              link="https://sors.com.co"
              image="sors.png"
            />
            <div className="bg-gray-100 text-white rounded-md">
              <div>
                <a href="https://wearered.co/neutro" target="_blank">
                  <div className="relative">
                    <div className="absolute h-full w-full z-40">
                      <div style={{ backdropFilter: 'blur(5px)' }} className="h-full rounded-md bg-black bg-opacity-20 opacity-0 hover:opacity-100">
                        <div className="flex items-center justify-center h-full">
                          <span className="font-semibold text-xl">Neutro</span>
                          <svg className="h-5 mx-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div 
                      className="relative w-full h-60 rounded-md opacity-95" 
                      style={{ 
                        background: 'url(/images/experience/neutro.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="projects" />
        <div className="mt-10">
          <h2 className="text-2xl lg:text-3xl font-medium">Proyectos</h2>
          <div className="max-w-prose">
            <div className="border-b py-8">
              <a 
                href="https://bybmc.co" 
                target="_blank"
                className="text-base lg:text-lg mr-1"
              >
                <b className="font-semibold mr-1">BMC Quant</b>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-flex" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg> -
              </a>
              <i>Abril, 2021</i>
              <p className="text-base lg:text-lg font-light">Plataforma de cursos financieros.</p>
              <span className="text-base lg:text-lg block mt-4 font-light"><b className="font-semibold">Tecnologias:</b> Next.js, React.js, Bootstrap, Vercel, MongoDB</span>
            </div>
            <div className="py-8">
              <a 
                href="https://musicallbank.com" 
                target="_blank"
                className="text-base lg:text-lg mr-1"
              >
                <b className="font-semibold mr-1">Musicallbank</b>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-flex" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg> -
              </a>
              <i>Junio, 2021</i>
              <p className="text-base lg:text-lg font-light">Sitio web sobre servicios relacionados con música.</p>
              <span className="text-base lg:text-lg block mt-4 font-light"><b className="font-semibold">Tecnologias:</b> Next.js, React.js, Bootstrap, Vercel, MongoDB</span>
            </div>
          </div>
        </div>
        <div className="mt-6 font-light">
          <h2 className="text-2xl lg:text-3xl font-medium">Educacíon</h2>
          <span className="text-base lg:text-lg mt-4 block">
            <b className="font-semibold mr-1">Tecnológico San Agustín</b>
            - Montería, Colombía
          </span>
          <i className="text-base lg:text-lg">Diseñador Gráfico, Jun 2019</i>
        </div>
        <div className="my-14">
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
                  Jair Pérez aprende rápido y es muy apasionado 
                  en lo que hace, le gustan los retos y me 
                  sorprende mucho su resiliencia.
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
  )
}

export default Home