import React from 'react'
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact , FaNodeJs} from "react-icons/fa";
import { SiCsharp, SiDotnet, SiGit, SiTailwindcss } from "react-icons/si";

export default function AboutMe() {
  return (
    <div className="max-w-4xl mx-auto p-6 font-custom">
      {/* Sección de Sobre Mí */}
      <section className="mb-12">
        <h1 className="text-5xl font-bold text-center mb-8 text-white">Sobre Mí</h1>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-lg leading-relaxed text-white text-center">
            Hola, soy David, un desarrollador web con pasión por la tecnología y el diseño. 
            Con 3 años de experiencia en desarrollo front-end y back-end, me especializo en crear 
            aplicaciones web modernas y funcionales utilizando tecnologías como React, Node.js, y Tailwind CSS. 
            Me encanta resolver problemas y buscar soluciones innovadoras. Siempre estoy aprendiendo y buscando 
            nuevas oportunidades para mejorar mis habilidades y contribuir a proyectos interesantes.
          </p>
        </div>
      </section>

      {/* Sección de Experiencia y Habilidades */}
      <section>
        <h2 className="text-3xl font-semibold text-center mb-8 text-white">Experiencia y Habilidades</h2>
        <div className="hover:bg-cyan-500 bg-white p-6 rounded-lg shadow-lg mb-6">
          <h3 className="text-2xl font-semibold mb-4">Experiencia Laboral</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li><strong>Desarrollador fullstack en World Office</strong> (2021 - Actualmente) - Desarrollador full stack</li>
            <li><strong>Freelance en Proyectos Diversos</strong> (2020 - 2021) - Desarrollo de páginas web</li>
          </ul>
        </div>

        <div className="hover:bg-cyan-500 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Habilidades Clave</h3>
          <div className="list-disc list-inside text-gray-700">
            <p className='flex'>
              <RiJavascriptFill className="text-xl bg-yellow-300 rounded mr-2" />
              <strong>Javascript</strong> - Desarrollo web en front y backend .
            </p>
            <p className='flex'>
              <FaReact className="text-xl bg-black text-cyan-400 rounded mr-2" />
              <strong>React</strong> - Desarrollo de interfaces interactivas y dinámicas.
            </p>
            <p className='flex'>
              <FaNodeJs className="text-xl bg-black text-green-600 rounded mr-2" />
              <strong>Node.js</strong> - Creación de aplicaciones del lado del servidor y APIs.
            </p>
            <p className='flex'>
              <SiCsharp className="text-xl bg-green-500 text-black rounded mr-2" />
              <strong>C#</strong> - Creación de aplicaciones del lado del servidor y APIs.
            </p>
            <p className='flex'>
              <SiDotnet className="text-xl bg-violet-800 text-white rounded mr-2" />
              <strong>.NET</strong> - Creación de aplicaciones del lado del servidor y APIs.
            </p>
            <p className='flex'>
              <SiGit className="text-xl bg-red-600 text-black rounded mr-2" />
              <strong>Git</strong> - Creación de aplicaciones del lado del servidor y APIs.
            </p>
            <p className='flex'>
              <SiTailwindcss className="text-xl bg-black text-teal-400 rounded mr-2" />
              <strong>Tailwind CSS</strong> - Creación de aplicaciones del lado del servidor y APIs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
