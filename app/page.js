import {BsBootstrap, BsFillMoonStarsFill, BsGithub, BsLink} from 'react-icons/bs';
import {AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Image from "next/image";
import profile from "../public/profile.png";
import front from '../public/react.png'
import design from '../public/design.png';
import code from '../public/code.png';
import playback1 from '../public/portfolio/playback1.png'
import playback2 from '../public/portfolio/playback2.jpg'
import vittascience1 from '../public/portfolio/vittascience1.png'
import vittascience2 from '../public/portfolio/vittascience2.png'
import linktree1 from '../public/portfolio/linktree1.png'

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
  TbBrandVercel
} from "react-icons/tb";

import { useState, useEffect } from 'react';
import { useStore } from './store';

import { DarkToggle } from './components/darkToggle';
import { ShinyToggle } from './components/shinyToggle';


export default function Home() {
  // Dark mode
  const { darkMode } = useStore();
  
  // Shine mode
  const { shineMode } = useStore();

  return (
    <div className={darkMode ? 'dark' : ""}>
      <div className='sticky top-0'>
        <nav className='px-10 md:px-20 lg:px-40 py-4 md:py-8 flex justify-between bg-white dark:bg-gray-900 dark:text-white'>
          <h1 className='text-xl font-JetBrains_MonoBold'>VIVIANE&apos;S PORTFOLIO</h1>
          <ul className='flex items-center ml-4'>
            <li>
              <DarkToggle />
            </li>
            <li className='w-32'>
              <a className={`transition-all bg-gradient-to-r from-violet-300 to-purple-500 font-JetBrains_MonoBold text-white shine:text-blue px-4 py-2 ml-4 md:ml-8 rounded-md ${shineMode ? 'text-lg font-JetBrains_MonoExtraBold animated-background from-purple-600 via-blue-600 to-violet-700' : ''}`} href="./CV.pdf" download="Viviane Dessaint - CV" >Resume</a>
            </li>
          </ul>
        </nav>
      </div>

      <main className='bg-white px-10 md:px-20 lg:px-32 dark:bg-gray-900'>
        <section className="min-h-screen">          
          <div className='text-center p-10 pb-0'>
            <h2 className='text-5xl py-2 mt-6 text-purple-500 font-JetBrains_Mono font-medium md:text-6xl dark:text-violet-300'>
              Viviane Dessaint
            </h2>
            <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>
              Web and mobile developer
            </h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-200'>
              Developing SASS mobile and web applications with React Native, ReactJS and NextJS. Looking for job opportunities in Paris !
            </p>
            <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400'>
              <a href='https://www.linkedin.com/in/vivianedessaint/'>
                <AiFillLinkedin className='transition-all duration-300 hover:text-purple-500 dark:hover:text-violet-300'/>
              </a>
              <a href="https://github.com/Jubstacheit">
                <AiFillGithub className='transition-all duration-300 hover:text-purple-500 dark:hover:text-violet-300'/>
              </a>
            </div>
            <div className='p-2 mx-auto bg-gradient-to-b from-blue-400 rounded-full w-60 h-60 mt-20 overflow-hidden md:h-96 md:w-96'>
              <Image alt='Profile picture' src={profile} objectFit='cover' />
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1 dark:text-white'>My experiences</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
              I&apos;ve graduated from the <span className='text-purple-500 dark:text-violet-300 font-JetBrains_MonoBold'>
                <a href="https://www.iscod.fr/formation-concepteur-developpeur-applications-en-alternance">Iscod</a>
                </span> school in 2023 with a bachelor&apos;s degree in Application Designer and Developer. I&apos;ve also worked 
                with <span className='text-purple-500 dark:text-violet-300 font-JetBrains_MonoBold'><a href="https://en.vittascience.com">
                Vittascience</a>
                </span> for more than a year, as a front-end and accessibility developer.
                For more details, please refer to my <ShinyToggle />.
            </p>
          </div>
          <div className='lg:flex lg:flex-wrap my-10 lg:justify-center'>
            <div className='text-center shadow-lg p-10 rounded-xl m-4 my-8 lg:my-4 dark:bg-white lg:basis-96'>
              <div className='flex justify-center'>
                <Image alt='Design icon' src={front} height={100} />
              </div>
              <h3 className='text-lg font-medium pt-8 pb-2'>Frontend</h3>
              <p className='py-2'>
                By working with Vittascience for more than a year and on my personnal projects, I&apos;ve learned to create appealing, 
                accessible and responsive web and mobile interfaces.
              </p>
              <h4 className='py-4 pb-8 text-purple-500 font-JetBrains_MonoBold'>Frontend tech I use</h4>
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
            <div className='text-center shadow-lg p-10 rounded-xl m-4 my-8 lg:my-4 dark:bg-white lg:basis-96'>
              <div className='flex justify-center'>
                <Image alt='Back-end icon' src={code} width={100} height={100} />
              </div>
              <h3 className='text-lg font-medium pt-8 pb-2'>Backend</h3>
              <p className='py-2'>
                During my bachelor&apos;s degree, I worked on full-stack app and complex backend structures, databases and APIs. I&apos;m able to 
                create full stack applications with Express, I&apos;ve got some experience with PHP and I even worked on a SAAS.
              </p>
              <h4 className='py-4 pb-8 text-purple-500 font-JetBrains_MonoBold'>Backend tech I use</h4>
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
            <div className='text-center shadow-lg p-10 rounded-xl m-4 my-8 lg:my-4 dark:bg-white lg:basis-96'>
              <div className='flex justify-center'>
                <Image alt='Design icon' src={design} width={100} height={100} />
              </div>
              <h3 className='text-lg font-medium pt-8 pb-2'>Design</h3>
              <p className='py-2'>
                My diverse experience led me to work on design, both conceptually and visually. I worked on the visual aspect of the 
                Vittascience website and interfaces, and I&apos;ve also worked on my personnal projects. I also learned how to conceptualize
                web apps, backend structures and databses with UML diagrams or even the Merise method.
              </p>
              <h4 className='py-4 pb-8 text-purple-500 font-JetBrains_MonoBold'>Design tools I use</h4>
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
            <h3 className='text-3xl py-1 dark:text-white'>Projects</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
              Here, you can see which projects I&apos;m proud of. I&apos;ve worked on them during my studies, my work at Vittascience or on my free time.
            </p>
          </div>
          <div className='py-4 lg:flex-row lg:flex-wrap lg:flex md:flex-col md:flex lg:justify-center lg:gap-2 shadow-lg p-4 rounded-xl dark:bg-white my-4'>
            <div className='text-center w-full'>
              <p className='text-2xl font-JetBrains_MonoBold py-4 text-gray-800'>
                Playback
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
              I&apos;ve worked on the Playback project during my studies at Iscod, and still continuing today. It&apos;s a full-stack mobile and web app that
              allows users to create an account and register games from the largest API database. Games can be put in different lists : games 
              you&apos;ve played, games you&apos;re currently playing, and most importantly, the games that you want to play - your &apos;backlog&apos;.
              This is still in progress and other functions are coming, like the game rating. <br />
              The app is primarily usable on Android as a Native app, made with React Native, and will be available on the Play Store.
            </p>
            <div className='flex flex-row justify-around gap-28 lg:px-8'>
              <div className='flex flex-col justify-center text-center'>
                <p className='text-xl py-2 font-JetBrains_MonoBold text-gray-800'>
                  Links
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
                  Tech used
                </p>
                <div className='flex flex-row justify-start gap-4'>
                  <TbBrandReactNative className='text-4xl text-purple-500'/>
                  <TbBrandNodejs className='text-4xl text-purple-500'/>
                  <TbBrandMysql className='text-4xl text-purple-500'/>
                </div>
              </div>
            </div>
          </div>
          <div className='py-4 lg:flex-row lg:flex-wrap lg:flex lg:justify-center shadow-lg p-4 rounded-xl dark:bg-white my-4'>
            <div className='text-center w-full'>
              <p className='text-2xl font-JetBrains_MonoBold py-4 text-gray-800'>
                My work at Vittascience
              </p>
            </div>
            <div className='lg:flex-row lg:flex-wrap md:flex-col md:flex lg:flex md:justify-center lg:justify-center lg:gap-2'>
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
            </div>
            <p className='text-sm leading-6 text-gray-800 py-4 lg:px-2'>
              During my time at Vittascience, my work revolved mainly on front-end and accessibility. Here you can see elements like the 
              programming interfaces provided by the website - Python here - or the &quot;print mode&quot; for the ressources, to make them 
              more accessible for the schools. I had to adapt the high-contrast mode for the interfaces, because it wasn&apos;t available at first.
              I also added aria-labels to the elements, and made them usable with the keyboard of the user. I also created new pages from scratch, like 
              the glossary. Vittascience gave me lots of experience about the accessibility of the web.
            </p>
            <div className='flex flex-row justify-around gap-28 lg:px-8'>
              <div className='flex flex-col justify-center text-center'>
                <p className='text-xl py-2 font-JetBrains_MonoBold text-gray-800'>
                  Link
                </p>
                <div className='flex flex-row justify-center'>
                  <a href='https://fr.vittascience.com' className='text-md text-purple-500'>
                    <BsLink className='text-4xl'/>
                  </a>
                </div>
              </div>
              <div className='flex flex-col justify-center text-center'>
                <p className='text-xl py-2 font-JetBrains_MonoBold text-gray-800'>
                  Tech used
                </p>
                <div className='flex flex-row justify-start gap-4'>
                  <TbBrandDocker className='text-4xl text-purple-500'/>
                  <TbBrandPhp className='text-4xl text-purple-500'/>
                  <TbBrandMysql className='text-4xl text-purple-500'/>
                  <TbXd className='text-4xl text-purple-500'/>
                </div>
              </div>
            </div>
          </div>
          <div className='py-4 lg:flex-row lg:flex-wrap lg:flex md:flex md:flex-col lg:justify-center shadow-lg p-4 rounded-xl dark:bg-white my-4'>
            <div className='text-center w-full'>
              <p className='text-2xl font-JetBrains_MonoBold py-4 text-gray-800'>
                Linktree clone
              </p>
            </div>
            <div className='basis-1/3 flex-1 lg:px-2 py-4 max-w-lg self-center shadow-lg p-4 rounded-xl dark:bg-white'>
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
              A Linktree clone I made with NextJS, TailwindCSS, and the Vercel&apos;s Edge Config Store. It serves as a hub for my different links for
              my projects - personnal and profesionnal - and social media. The data is stored in the Edge Config Store in the form of a JSON. Adding
              or editing links and pictures changes the website without having to redeploy it. It&apos;s a fun project and I plan on updating it with
              multinlingual display and new links. <br />
              This project leads to personnal links and socials, so it won&apos;t be shared on this portfolio aside from the repository.
            </p>
            <div className='flex flex-row justify-around gap-28 lg:px-8'>
              <div className='flex flex-col justify-center text-center'>
                <p className='text-xl py-2 font-JetBrains_MonoBold text-gray-800'>
                  Link
                </p>
                <div className='flex flex-row justify-center gap-4'>
                  <a href='https://github.com/Jubstacheit/linktree' className='text-md text-purple-500'>
                    <BsGithub className='text-4xl'/>
                  </a>
                </div>
              </div>
              <div className='flex flex-col justify-center text-center'>
                <p className='text-xl py-2 font-JetBrains_MonoBold text-gray-800'>
                  Tech used
                </p>
                <div className='flex flex-row justify-start gap-4'>
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