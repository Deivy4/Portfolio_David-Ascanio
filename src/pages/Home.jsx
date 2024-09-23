import React from 'react'
import myImage from '../assets/programador_img.png';
import '../styles/Fonts.css'; 
import '../styles/componentsStyles/Home.css'; 
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main className='container-home items-center justify-evenly text-white md:flex'>
        <div className="font-custom flex flex-col items-center min-w-96">
            <h1 className='text-4xl'>Hi, I am David Ascanio</h1>
            <p className='text-4xl'>Web developer</p>
            <div className='flex gap-3'>
              <Link to="/projects" className='hover:bg-white hover:text-black mt-2 py-1 px-3 bg-black rounded cursor-pointer text-white'>See projects</Link>
              <a href='/curriculum_vitae_David_Ascanio.pdf' download={'curriculum_vitae_David_Ascanio.pdf'} className='hover:bg-white hover:text-black mt-2 py-1 px-3 bg-black rounded cursor-pointer text-white'>Dowmload CV</a>
            </div>
        </div>
        <div className='justify-center flex min-w-96'>
            <img className='size-auto min-w-96' src={myImage}/>
        </div>
    </main>
  )
}
