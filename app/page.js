import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillWithCircle, AiFillLinkedin, AiFillYoutube, AiFillTwitterCircle } from 'react-icons/ai';

export default function Home() {
  return (
    <div>
      <main className='bg-white px-10'>
        <section className="h-screen">
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-JetBrains_MonoBold'>VIVIANE&apos;S PORTFOLIO</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill className='cursor-pointer text-2xl'/>
              </li>
              <li>
                <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="#">Resume</a>
              </li>
            </ul>
          </nav>
          <div>
            <h2>
              Viviane Dessaint
            </h2>
            <h3>
              Web developper
            </h3>
            <p>
              Join me
            </p>
          </div>
          <div>
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
        </section>
      </main>
    </div>
  );
}
