import React from 'react'
import myImage from '../assets/programador_img.png';
import '../styles/Fonts.css'; 
import '../styles/componentsStyles/Home.css'; 
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main className='container-home items-center justify-evenly text-white md:flex'>
        <div className="font-custom flex flex-col items-center min-w-96">
            <h1 className='text-4xl'>Hola, soy David Ascanio</h1>
            <p className='text-4xl'>Desarrollador Web</p>
            <Link to="/projects" className='mt-2 py-1 px-3 bg-blue-500 rounded cursor-pointer'>See projects</Link>
        </div>
        <div className='justify-center flex min-w-96'>
            <img className='size-auto min-w-96' src={myImage}/>
        </div>
    </main>
  )
}
