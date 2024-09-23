import React, { useState } from 'react'
import CardProject from '../components/CardProject'
import ComboBox from '../components/ComboBox';
import projects from '../Data/projects';
import { FaSearch } from "react-icons/fa";

export default function Projects() {
  const [projectsR, setProjects] = useState(projects)
  const [search, setSearch] = useState('')
  const handleClickSearch = (e) =>{
    e.preventDefault()
    let projectsFilters = projects.filter(x => x.tittle.toLowerCase().includes(search.toLowerCase()))
    setProjects(projectsFilters)
  }
  return (
    <>
    <div className='pl-8 mx-auto h-28 rounded text-white flex flex-col justify-between'>
      <div className='flex items-start gap-4'>
          <div className="flex items-center  rounded-lg overflow-hidden w-1/4 min-w-72 pl-2 border">
              <div className="">
                <FaSearch className="text-gray-500 mr-2" />
              </div>
              <input
                onChange={(e)=> setSearch(e.target.value.trim())}
                type="text"
                placeholder="Buscar..."
                className="outline-none p-1 w-full text-black rounded-r"
              />
          </div>
          {/* <ComboBox/> */}
      </div>
      <div>
        <a onClick={(e) => handleClickSearch(e)} className='py-1 px-3 bg-blue-500 rounded cursor-pointer w-16 items-end'>Search</a>
      </div>
    </div>
    <div className='mt-6 mx-auto'>
      <div className='flex flex-wrap w-auto p-6 justify-center gap-4'>
        {projectsR.map((project, index) => (
          <CardProject
            key={index}
            tittle={project.tittle}
            description={project.description}
            imageUrl={project.imageUrl}
            url= {project.url}
          />
        ))}
      </div>
    </div>
    </>
  );
}
