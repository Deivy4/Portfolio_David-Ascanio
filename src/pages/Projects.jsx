import React from 'react'
import CardProject from '../components/CardProject'
import project1 from '../assets/photos_projects/page_cameras.jpeg'
import project2 from '../assets/photos_projects/form_validation.jpeg'
import project3 from '../assets/photos_projects/app_scrapping.jpeg'
export default function Projects() {
  const projects = [
    {
      tittle : "Página de cámaras",
      description : "Desarrollé una página web para una empresa de servicios de cámaras de seguridad. La plataforma permite a los usuarios explorar diferentes opciones de cámaras, consultar precios y ponerse en contacto con el equipo de ventas. Implementé una interfaz intuitiva y responsive, con un backend robusto para gestionar consultas y datos de clientes. Tecnologías usadas: React, Node.js, Express, MongoDB.",
      imageUrl : project1,
      url : "https://github.com/Deivy4/PageCamera"
    },
    {
      tittle : "Formulario de validación",
      description : "Creé un formulario web que valida direcciones de correo electrónico, envía datos a un servidor y permite limpiar el formulario después de la interacción. La aplicación incluye validación en tiempo real y feedback visual para una mejor experiencia de usuario. Tecnologías usadas: HTML, CSS, JavaScript, y una API de validación de correo electrónico.",
      imageUrl : project2
    },
    {
      tittle : "App scrapping",
      description : "Desarrollé una aplicación de scraping para automatizar la eliminación de comentarios no deseados en redes sociales. La aplicación interactúa con plataformas de terceros para gestionar contenido en tiempo real, utilizando técnicas de scraping y automatización. Tecnologías usadas: Python, BeautifulSoup, Selenium.",
      imageUrl : project3
    }
  ]
  return (
    <div className="font-custom">
      {projects.map((project, index) => (
        <CardProject
          key={index}
          tittle={project.tittle}
          description={project.description}
          imageUrl={project.imageUrl}
          url= {project.url}
        />
      ))}
    </div>
  )
}
