'use client'

import {BsBootstrap, BsFillMoonStarsFill, BsGithub, BsLink} from 'react-icons/bs';
import {AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Image from "next/image";
import profile from "../../public/profile.png";
import front from '../../public/react.png'
import design from '../../public/design.png';
import code from '../../public/code.png';
import playback1 from '../../public/portfolio/playback1.png'
import playback2 from '../../public/portfolio/playback2.jpg'
import vittascience1 from '../../public/portfolio/vittascience1.png'
import vittascience2 from '../../public/portfolio/vittascience2.png'
import linktree1 from '../../public/portfolio/linktree1.png'

import { 
  TbBrandNextjs, 
  TbBrandReact, 
  TbBrandReactNative, 
  TbBrandNodejs, 
  TbBrandMysql, 
  TbBrandMongodb, 
  TbBrandPhp,
  TbBrandFigma,
  TbXd,
  TbBrandTailwind,
  TbBrandBootstrap,
  TbBrandDocker,
  TbBrandVercel,
  TbLanguage,
  TbLanguageOff
} from "react-icons/tb";


import { DarkToggle } from '../components/darkToggle';
import { ShinyToggle } from '../components/shinyToggle';
import { LangToggle } from '../components/langToggle';

import Hero from './hero';

import { useMessages, useLocale } from 'next-intl';
import { useStore } from '../store';




export default function Home() {
  // Dark mode
  const darkMode = useStore(state => state.darkMode);

  // Shine mode
  const shineMode = useStore(state => state.shineMode);

  // Translations
  const t = useMessages();
  const locale = useLocale();


  return (
    <div className={darkMode ? 'dark' : ""}>
      <div className='sticky top-0'>
        <nav role='navigation' className='px-4 md:px-20 lg:px-40 py-4 md:py-8 flex justify-between bg-white dark:bg-gray-900 dark:text-white'>
          <h1 className='text-center text-md md:text-xl font-JetBrains_MonoBold'>{t.header.title}</h1>
          <ul className='flex items-center gap-4 ml-4'>
            <li>
              <LangToggle locale={locale}/>
            </li>
            <li>
              <DarkToggle />
            </li>
            <li>
              <a role='button' tabIndex={0} className={`text-nowrap transition-all bg-gradient-to-r from-violet-300 to-purple-500 font-JetBrains_MonoBold text-white shine:text-blue px-4 py-2 md:ml-8 rounded-md ${shineMode ? 'font-JetBrains_MonoExtraBold animated-background from-purple-600 via-blue-600 to-violet-700' : ''}`} href="./CV.pdf" download="Viviane Dessaint - CV" >{t.header.resume}</a>
            </li>
          </ul>
        </nav>
      </div>

      <main className='bg-white px-4 md:px-20 lg:px-32 dark:bg-gray-900'>
        <section className="mb-16">          
          <Hero />
        </section>

        <section>
          <div className='p-2'>
            <h3 className='text-3xl py-1 dark:text-white'>{t.experiences.title}</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
              {t.experiences.desc1}
              <span className='text-purple-500 dark:text-violet-300 font-JetBrains_MonoBold'><a href="https://www.iscod.fr/formation-concepteur-developpeur-applications-en-alternance">ISCOD</a></span>
              {t.experiences.desc2}
              <span className='text-purple-500 dark:text-violet-300 font-JetBrains_MonoBold'><a href="https://en.vittascience.com">Vittascience</a></span>
              {t.experiences.desc3}
              <ShinyToggle />
              .
            </p>
          </div>
          <div className='lg:flex lg:flex-wrap my-10 lg:justify-center'>
            <div className='text-center shadow-lg p-4 md:p-10 rounded-xl md:mx-4 my-8 lg:my-4 dark:bg-white lg:basis-96'>
              <div className='flex justify-center'>
                <Image alt='Design icon' src={front} height={100} />
              </div>
              <h3 className='text-lg font-medium pt-8 pb-2'>Frontend</h3>
              <p className='py-2'>
                {t.frontend.desc}
              </p>
              <h4 className='py-4 pb-8 text-purple-500 font-JetBrains_MonoBold'>{t.frontend.tech}</h4>
              <div className='flex justify-around gap-6 flex-wrap'>
                <div className='min-w-20'>
                  <div className='flex justify-center'>
                    <TbBrandReact className='text-4xl text-blue-500'/>
                  </div>
                  <p>ReactJS</p>
                </div>
                <div className='min-w-20'>
                  <div className='flex justify-center'>
                    <TbBrandReactNative className='text-4xl text-blue-500'/>
                  </div>
                  <p>React Native</p>
                </div>
                <div className='min-w-20'>
                  <div className='flex justify-center'>
                    <TbBrandNextjs className='text-4xl text-blue-500'/>
                  </div>
                  <p>NextJS</p>
                </div>
                <div className='min-w-20'>
                  <div className='flex justify-center'>
                    <TbBrandTailwind className='text-4xl text-blue-500'/>
                  </div>
                  <p>Tailwind</p>
                </div>
                <div className='min-w-20'>
                  <div className='flex justify-center'>
                    <TbBrandBootstrap className='text-4xl text-blue-500'/>
                  </div>
                  <p>Bootstrap</p>
                </div>
              </div>
            </div>
            <div className='text-center shadow-lg p-4 md:p-10 rounded-xl md:mx-4 my-8 lg:my-4 dark:bg-white lg:basis-96'>
              <div className='flex justify-center'>
                <Image alt='Back-end icon' src={code} width={100} height={100} />
              </div>
              <h3 className='text-lg font-medium pt-8 pb-2'>Backend</h3>
              <p className='py-2'>
              {t.backend.desc}
              </p>
              <h4 className='py-4 pb-8 text-purple-500 font-JetBrains_MonoBold'>{t.backend.tech}</h4>
              <div className='flex justify-around gap-6 flex-wrap'>
                <div className='min-w-20'>
                  <div className='flex justify-center'>
                    <TbBrandNodejs className='text-4xl text-blue-500'/>
                  </div>
                  <p>ExpressJS</p>
                </div>
                <div className='min-w-20'>
                  <div className='flex justify-center'>
                    <TbBrandMysql className='text-4xl text-blue-500'/>
                  </div>
                  <p>MySQL</p>
                </div>
                <div className='min-w-20'>
                  <div className='flex justify-center'>
                    <TbBrandMongodb className='text-4xl text-blue-500'/>
                  </div>
                  <p>MongoDB</p>
                </div>
                <div className='min-w-20'>
                  <div className='flex justify-center'>
                    <TbBrandPhp className='text-4xl text-blue-500'/>
                  </div>
                  <p>PHP</p>
                </div>
                <div className='min-w-20'>
                  <div className='flex justify-center'>
                    <TbBrandDocker className='text-4xl text-blue-500'/>
                  </div>
                  <p>Docker</p>
                </div>
              </div>
            </div>
            <div className='text-center shadow-lg p-4 md:p-10 rounded-xl md:mx-4 my-8 lg:my-4 dark:bg-white lg:basis-96'>
              <div className='flex justify-center'>
                <Image alt='Design icon' src={design} width={100} height={100} />
              </div>
              <h3 className='text-lg font-medium pt-8 pb-2'>Design</h3>
              <p className='py-2'>
              {t.design.desc}
              </p>
              <h4 className='py-4 pb-8 text-purple-500 font-JetBrains_MonoBold'>{t.design.tech}</h4>
              <div className='flex justify-around gap-6 flex-wrap'>
                <div>
                  <div className='flex justify-center'>
                    <TbBrandFigma className='text-4xl text-blue-500'/>
                  </div>
                  <p>Figma</p>
                </div>
                <div>
                  <div className='flex justify-center'>
                    <Image width="36" height="36" src="https://img.icons8.com/3B82F6/external-kiranshastry-solid-kiranshastry/64/external-flow-interface-kiranshastry-solid-kiranshastry.png" alt="external-flow-interface-kiranshastry-solid-kiranshastry"/>
                  </div>
                  <p>UML</p>
                </div>
                <div>
                  <div className='flex justify-center'>
                    <TbXd className='text-4xl text-blue-500'/>
                  </div>
                  <p>AdobeXD</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      <section>
        <div className='flex flex-col gap-4 py-10 lg:flex-row lg:flex-wrap lg:gap-0 justify-center'>
          <div className='w-full'>
            <h3 className='text-3xl py-1 dark:text-white'>{t.projects.title}</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
              {t.projects.desc}
            </p>
          </div>
          <div className='flex flex-col max-w-4xl m-auto gap-2 py-4 lg:flex-row lg:flex-wrap lg:flex md:flex-col md:flex lg:justify-center lg:gap-2 shadow-lg p-4 rounded-xl dark:bg-white my-4'>
            <div className='text-center w-full'>
              <p className='text-2xl font-JetBrains_MonoBold py-4 text-gray-800'>
                {t.projects.playback.title}
              </p>
            </div>
            <div className='basis-1/3 flex-1 lg:px-2 py-4 max-w-lg self-center shadow-lg p-4 rounded-xl dark:bg-white'>
              <Image 
                alt='Playback 1' 
                src={playback1} 
                className='rounded-lg object-cover' 
                width={'100%'} 
                height={"100%"} 
                layout='responsive' 
              />
            </div>
            <div className='basis-1/3 flex-1 lg:px-2 py-4 max-w-lg self-center shadow-lg p-4 rounded-xl dark:bg-white'>
              <Image 
                alt='Playback 2' 
                src={playback2} 
                className='rounded-lg object-cover' 
                width={'100%'} 
                height={"100%"} 
                layout='responsive' 
              />
            </div>
            <p className='text-sm leading-6 text-gray-800 py-4 lg:px-2'>
            {t.projects.playback.desc1} <br />
            {t.projects.playback.desc2}
            </p>
            <div className='flex flex-row justify-around gap-10 lg:gap-36 flex-wrap lg:px-8'>
              <div className='flex flex-col justify-center text-center'>
                <p className='text-xl py-2 font-JetBrains_MonoBold text-gray-800'>
                {t.projects.playback.links}
                </p>
                <div className='flex flex-row justify-start gap-4'>
                  <a href='https://playbackapp.netlify.app' className='text-md text-purple-500'>
                    <BsLink className='text-4xl'/>
                  </a>
                  <a href='https://github.com/Jubstacheit/Playback' className='text-md text-purple-500'>
                    <BsGithub className='text-4xl'/>
                  </a>
                </div>
              </div>
              <div className='flex flex-col justify-center text-center'>
                <p className='text-xl py-2 font-JetBrains_MonoBold text-gray-800'>
                  {t.projects.playback.tech}
                </p>
                <div className='flex flex-row justify-center gap-4'>
                  <TbBrandReactNative className='text-4xl text-purple-500'/>
                  <TbBrandNodejs className='text-4xl text-purple-500'/>
                  <TbBrandMysql className='text-4xl text-purple-500'/>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col max-w-4xl m-auto gap-2 py-4 lg:flex-row lg:flex-wrap lg:flex md:flex-col md:flex lg:justify-center lg:gap-2 shadow-lg p-4 rounded-xl dark:bg-white my-4'>
            <div className='text-center w-full'>
              <p className='text-2xl font-JetBrains_MonoBold py-4 text-gray-800'>
                {t.projects.vittascience.title}
              </p>
            </div>
              <div className='basis-1/3 flex-1 lg:px-2 py-4 self-center max-w-lg shadow-lg p-4 rounded-xl dark:bg-white'>
                <Image 
                  alt='Vittascience 1' 
                  src={vittascience1} 
                  className='rounded-lg object-cover' 
                  width={'100%'} 
                  height={"100%"} 
                  layout='responsive' 
                />
              </div>
              <div className='basis-1/3 flex-1 lg:px-2 self-center py-4 max-w-lg shadow-lg p-4 rounded-xl dark:bg-white'>
                <Image 
                  alt='Vittascience 2' 
                  src={vittascience2} 
                  className='rounded-lg object-cover' 
                  width={'100%'} 
                  height={"100%"} 
                  layout='responsive' 
                />
              </div>
            <p className='text-sm leading-6 text-gray-800 py-4 lg:px-2'>
              {t.projects.vittascience.desc}
            </p>
            <div className='flex flex-row justify-around gap-10 lg:gap-36 flex-wrap lg:px-8'>
              <div className='flex flex-col justify-center text-center'>
                <p className='text-xl py-2 font-JetBrains_MonoBold text-gray-800'>
                  {t.projects.vittascience.links}
                </p>
                <div className='flex flex-row justify-center'>
                  <a href='https://fr.vittascience.com' className='text-md text-purple-500'>
                    <BsLink className='text-4xl'/>
                  </a>
                </div>
              </div>
              <div className='flex flex-col justify-center text-center'>
                <p className='text-xl py-2 font-JetBrains_MonoBold text-gray-800'>
                  {t.projects.vittascience.tech}
                </p>
                <div className='flex flex-row justify-center gap-4'>
                  <TbBrandDocker className='text-4xl text-purple-500'/>
                  <TbBrandPhp className='text-4xl text-purple-500'/>
                  <TbBrandMysql className='text-4xl text-purple-500'/>
                  <TbXd className='text-4xl text-purple-500'/>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col max-w-4xl m-auto gap-2 py-4 lg:flex-row lg:flex-wrap lg:flex md:flex-col md:flex lg:justify-center lg:gap-2 shadow-lg p-4 rounded-xl dark:bg-white my-4'>
            <div className='text-center w-full'>
              <p className='text-2xl font-JetBrains_MonoBold py-4 text-gray-800'>
                {t.projects.linktree.title}
              </p>
            </div>
            <div className='basis-1/3 my-2 flex-1 lg:px-2 py-4 max-w-lg self-center shadow-lg p-4 rounded-xl dark:bg-white'>
              <Image 
                alt='Linktree' 
                src={linktree1} 
                className='rounded-lg object-cover' 
                width={'100%'} 
                height={"100%"} 
                layout='responsive' 
              />
            </div>
            <p className='text-sm leading-6 text-gray-800 py-4 lg:px-2'>
              {t.projects.linktree.desc}
            </p>
            <div className='flex flex-row justify-around gap-10 lg:gap-36 flex-wrap lg:px-8'>
              <div className='flex flex-col justify-center text-center'>
                <p className='text-xl py-2 font-JetBrains_MonoBold text-gray-800'>
                  {t.projects.linktree.links}
                </p>
                <div className='flex flex-row justify-center gap-4'>
                  <a href='https://github.com/Jubstacheit/linktree' className='text-md text-purple-500'>
                    <BsGithub className='text-4xl'/>
                  </a>
                </div>
              </div>
              <div className='flex flex-col justify-center text-center'>
                <p className='text-xl py-2 font-JetBrains_MonoBold text-gray-800'>
                  {t.projects.linktree.tech}
                </p>
                <div className='flex flex-row justify-center gap-4'>
                  <TbBrandNextjs className='text-4xl text-purple-500'/>
                  <TbBrandTailwind className='text-4xl text-purple-500'/>
                  <TbBrandVercel className='text-4xl text-purple-500'/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Credit for the flow icon */}
        <p className='text-xs py-2 text-black dark:text-white font-JetBrains_MonoItalic text-center'>
          <a href="https://icons8.com/icon/VEovKpkL1py0/flow">Flow</a> icon by <a href="https://icons8.com">Icons8</a>
        </p>

      </main>
    </div>
  );
}