'use client'

import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Image from "next/image";
import profile from "../public/profile.png";
import front from '../public/react.png'
import design from '../public/design.png';
import code from '../public/code.png';
import { 
  TbBrandNextjs, 
  TbBrandReact, 
  TbBrandReactNative, 
  TbBrandNodejs, 
  TbBrandMysql, 
  TbBrandMongodb, 
  TbBrandPhp 
} from "react-icons/tb";

import { useState } from 'react';




export default function Home() {
  // Dark mode
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ""}>
      <div className='sticky top-0'>
        <nav className='px-10 md:px-20 lg:px-40 py-8 flex justify-between bg-white dark:bg-gray-900 dark:text-white'>
          <h1 className='text-xl font-JetBrains_MonoBold'>VIVIANE&apos;S PORTFOLIO</h1>
          <ul className='flex items-center ml-4'>
            <li>
              <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl'/>
            </li>
            <li>
              <a className='bg-gradient-to-r from-violet-300 to-purple-500 font-JetBrains_MonoBold text-white px-4 py-2 rounded-md ml-8' href="/CV.pdf" download="Viviane Dessaint - CV" >Resume</a>
            </li>
          </ul>
        </nav>
      </div>

      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className="min-h-screen">          
          <div className='text-center p-10 pb-0'>
            <h2 className='text-5xl py-2 mt-6 text-purple-500 font-JetBrains_Mono font-medium md:text-6xl dark:text-violet-300'>
              Viviane Dessaint
            </h2>
            <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>
              Web and mobile developer
            </h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-200'>
              Developing SASS mobile and web applications with React Native, ReactJS and NextJS.
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
              I&apos;ve graduated from the <span className='text-purple-500 dark:text-violet-300 font-JetBrains_MonoBold'><a href="https://www.iscod.fr/formation-concepteur-developpeur-applications-en-alternance">Iscod</a></span> school in 2023 with a bachelor&apos;s degree in Application Designer and Developer. I&apos;ve also worked with <span className='text-purple-500 dark:text-violet-300 font-JetBrains_MonoBold'><a href="https://en.vittascience.com">Vittascience</a></span> for more than a year, as a front-end and accessibility developer.
            </p>
          </div>
          <div className='lg:flex gap-10'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              <div className='flex justify-center'>
                <Image alt='Design icon' src={front} height={100} />
              </div>
              <h3 className='text-lg font-medium pt-8 pb-2'>Frontend</h3>
              <p className='py-2'>
                By working with Vittascience for more than a year and on my personnal projects, I&apos;ve learned to create appealing, 
                accessible and responsive web and mobile interfaces.
              </p>
              <h4 className='py-4 pb-8 text-purple-500 font-JetBrains_MonoBold'>Frontend tech I use</h4>
              <div className='flex justify-center gap-6 flex-wrap'>
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
              </div>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              <div className='flex justify-center'>
                <Image alt='Back-end icon' src={code} width={100} height={100} />
              </div>
              <h3 className='text-lg font-medium pt-8 pb-2'>Backend</h3>
              <p className='py-2'>
                During my bachelor&apos;s degree, I worked on full-stack app and complex backend structures, databases and APIs. I&apos;m able to create full
                stack applications with Express, I&apos;ve got some experience with PHP and I even worked on a SAAS.
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
              </div>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              <div className='flex justify-center'>
                <Image alt='Design icon' src={design} width={100} height={100} />
              </div>
              <h3 className='text-lg font-medium pt-8 pb-2'>Design</h3>
              <p className='py-2'>
                By working with Vittascience for more than a year and on my personnal projects, I&apos;ve learned to create appealing, 
                accessible and responsive web and mobile interfaces.
              </p>
              <h4 className='py-4 pb-8 text-purple-500 font-JetBrains_MonoBold'>Frontend tech I use</h4>
              <div className='flex justify-center gap-6 flex-wrap'>
                <div>
                  <div className='flex justify-center'>
                    <TbBrandReact className='text-4xl text-blue-500'/>
                  </div>
                  <p>ReactJS</p>
                </div>
                <div>
                  <div className='flex justify-center'>
                    <TbBrandReactNative className='text-4xl text-blue-500'/>
                  </div>
                  <p>React Native</p>
                </div>
                <div>
                  <div className='flex justify-center'>
                    <TbBrandNextjs className='text-4xl text-blue-500'/>
                  </div>
                  <p>NextJS</p>
                </div>
              </div>
            </div>
            
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1 dark:text-white'>Portfolio</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
              Worked with Vittascience etc etc
            </p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'>
              <Image alt='Project 1' src={profile} className='rounded-lg object-cover' width={'100%'} height={"100%"} layout='responsive' />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
