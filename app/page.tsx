'use client';
import Link from 'next/link';
import pic1 from './src/mypic.png';
import pic2 from './src/dog.png';
import pic3 from './src/pro.png';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      
    >
    <nav className="bg-[#1e1e38] text-white w-full py-3 px-6 shadow-md fixed top-0 z-10">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <h2 className="text-2xl font-bold pr-40">Portfolio</h2>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-lg font-semibold items-center">
          <li><a href="#home" className="hover:text-indigo-400">Home</a></li>
          <li><a href="#about" className="hover:text-indigo-400">About Me</a></li>
          <li><a href="#skills" className="hover:text-indigo-400">Skills</a></li>
          <li><a href="#Projects" className="hover:text-indigo-400">Projects</a></li>
          <li><Link href="#contact" className="hover:text-indigo-400">Contact</Link></li>
        </ul>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 bg-[#1e1e38] px-6 py-4 space-y-4 rounded shadow-lg pl-[-20] ">
          <div className="flex flex-col items-center space-y-4">
            <a href="#home" className="block text-center hover:text-indigo-400" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#about" className="block text-center hover:text-indigo-400" onClick={() => setIsOpen(false)}>About Me</a>
            <a href="#skills" className="block text-center hover:text-indigo-400" onClick={() => setIsOpen(false)}>Skills</a>
            <a href="#Projects" className="block text-center hover:text-indigo-400" onClick={() => setIsOpen(false)}>Projects</a>
            <a href="#Contact" className="block text-center hover:text-indigo-400" onClick={() => setIsOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  
        <section id="home" className="flex flex-col md:flex-row justify-between items-center w-full max-w-6xl gap-10 mt-15 pt-15">
        <div className="home-left flex flex-col gap-0">
            <h6 className="text-lg md:text-2xl font-semibold mb-1 text-pink-400 ">Hi,I&apos;m</h6>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-1">
              Ragavan <br className="hidden md:block" /> Aruchamy
            </h1>
            <h4 className="text-xl md:text-2xl text-pink-400 font-medium leading-tight">Web <br />Developer</h4>
          <div className="flex gap-4 mt-4">
            <Link href="/pdf/RagavanA(RESUME).pdf" target="_blank" rel="noopener noreferrer">
              <button className="px-4 py-2 bg-transparent border-2 rounded hover:bg-indigo-700">Resume</button>
            </Link>
            <Link href="#Contact" className="">
              <button className="px-5 py-2 bg-transparent border-2 rounded hover:bg-indigo-700 whitespace-nowrap">Let&apos;s Talk</button>
            </Link>
          </div>
        </div>
        <div className="rounded-full overflow-hidden w-70 h-70 pl-100">
          <Image src={pic1} alt="Profile Picture" width={270} height={270} />
        </div>
      </section>

      <section id="about" className="w-full max-w-6xl my-16 pt-20 ">
        <h1 className="text-3xl font-semibold text-center mb-6 pb-20">About Me</h1>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2 flex justify-center">
            <Image src={pic2} alt="About" width={300} height={300} />
          </div>
          <div className="w-full md:w-1/2 text-sm sm:text-base">
            <h2 className="text-xl mb-4 font-bold">Ragavan Aruchamy</h2>
            <p className="mb-4">
             I am a proactive and results-driven Junior Web Developer with solid experience in both front-end and back-end development, specializing in technologies such as HTML, CSS, JavaScript, React, Python (Django), and SQL</p>
            <a href="#Contact" className="px-4 py-2 bg-transparent hover:bg-indigo-700"><button className="px-4 py-2 bg-transparent border-2 rounded hover:bg-indigo-700">Hire Me</button></a>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="w-full max-w-6xl my-16 py-30">
        <h1 className="text-3xl font-semibold text-center mb-6">Skills</h1>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2 flex justify-center">
            <Image src={pic3} alt="Skills" width={300} height={300} />
          </div>
          <div className="w-full md:w-1/2 space-y-3">
            {[
              ['HTML', 90],
              ['CSS', 80],
              ['JavaScript', 60],
              ['Python', 50],
              ['Django', 50],
              ['Tailwind', 50],
              ['MySQL', 50],
            ].map(([label, percent]) => (
              <div key={label}>
                <div className="flex justify-between">
                  <span>{label}</span>
                  <span>{percent}%</span>
                </div>
                <div className="w-full bg-gray-700 h-2 rounded">
                  <div
                    className="bg-indigo-500 h-2 rounded"
                    style={{ width: `${percent}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="Projects" className="w-full max-w-6xl my-16 pl-20 py-30">
        <h1 className="text-3xl font-semibold text-center mb-6 pb-10">Projects</h1>
        <div className="flex flex-col md:flex-row jusify-center align-center gap-8">
          {[
            {
              title: 'Stripe clone',
              desc: 'Developed a clone of the stripe webpage using React.js and bootstrap.',
              git:'https://github.com/Ragavan55/Stipe-Clone',
              live:'https://stripeclone3.netlify.app/',
            },
            {
              title: 'Fully funcional Blog webpage',
              desc: 'Developed a fully functional blog webpage using Django and HTML, CSS, Javascript.',
              git:'https://github.com/Ragavan55/Blogapp_Basic',
              live:'',
            },{
              title: 'An Demo project on Next.js',
              desc: 'An Demo project on Next.js, which is a framework for React.js which is used to display the CRUD operations.',
              git:'',
              live:'',
            },
            // {
            //   title: 'Fire service navigation and monitoring',
            //   desc: 'Developed an fully functional application to increase the interaction between the fire service and the public, which is developed using Django and HTML, CSS, Javascript.',
            //   git:'',
            //   live:'',
            // },{
            //   title: 'Sea border detection and ranging ',
            //   desc: 'Developed a fully functional Django application that is used to track and monitoring the ship.',
            //   git:'',
            //   live:'',
            // },
          ].map((proj) => (
            <div
              key={proj.title}
              className="border border-indigo-300 rounded-lg p-4 flex flex-col justify-between"
              style={{ width: 320, height: 260, minWidth: 260, minHeight: 220 }}
            >
              <div>
                <h2 className="text-xl font-bold mb-2">{proj.title}</h2>
                <p className="text-sm mb-2 line-clamp-4">{proj.desc}</p>
              </div>
              <div className="flex gap-4 mt-auto pt-4">
                <Link href={proj.git || "#"} className="bg-gray-600 rounded hover:bg-gray-700 flex-1" target="_blank" >
                  <button className="w-full px-4 py-2 bg-transparent rounded hover:bg-indigo-700">GitHub</button>
                </Link>
                <Link href={proj.live || "#"} className="bg-indigo-600 rounded hover:bg-indigo-700 flex-1" target="_blank">
                  <button className="w-full px-4 py-2 bg-transparent rounded hover:bg-indigo-700">Live Link</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

       <section        id="Contact"        className="w-full flex justify-center items-center my-16 py-10 z-50"      >
        <div className="w-full max-w-3xl bg-[#23234a] rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-semibold text-center mb-6">Contact Me</h1>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="p-2 rounded bg-gray-800 text-white"
            />
            <input
              type="email"
              placeholder="Enter Your Email"
              className="p-2 rounded bg-gray-800 text-white"
            />
            <input
              type="tel"
              placeholder="Enter Your Phone"
              className="p-2 rounded bg-gray-800 text-white"
            />
            <textarea
              placeholder="Enter Messages"
              rows={5}
              className="p-2 rounded bg-gray-800 text-white"
            ></textarea>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-700"
            >
              Send
            </button>
          </form>
        </div>
      </section>

      <footer className="w-full flex flex-col items-center justify-center text-center border-t border-gray-600 py-6">
        <div className="flex justify-center gap-4 mb-4">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#Projects">Projects</a>
          <a href="#Contact">Contact</a>
        </div>
        <div className="flex justify-center gap-4 text-lg">
          <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
          <a href="#"><i className="fa-brands fa-github"></i></a>
          <a href="#"><i className="fa-brands fa-instagram"></i></a>
        </div>
        <p className="mt-4">&copy; All Rights Reserved - <span className="text-indigo-400">BY RAGAVAN</span></p>
      </footer>
    </div>
  );
};