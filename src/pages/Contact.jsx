import React from 'react'

export default function Contact() { 
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-5xl font-bold text-center mb-8 text-white font-custom">Contacto</h1>
      
      {/* Información de Contacto */}
      <section className="mb-12 text-center">
        <p className="text-lg mb-4 text-white">
          ¿Tienes alguna pregunta o quieres ponerte en contacto? ¡Estoy aquí para ayudarte!
        </p>
        <div className="flex flex-col items-center">
          <a href="mailto:daviddeveloper24@outlook.com" className="text-white hover:underline mb-4">
            Correo Electrónico: daviddeveloper24@outlook.com
          </a>
          <a href="tel:+1234567890" className="text-white hover:underline mb-4">
            Teléfono: +57 302 7682857 (solo whatsapp)
          </a>
          <a href="https://www.linkedin.com/in/david-ascanio/" className="text-white hover:underline">
            LinkedIn: linkedin.com/in/david-ascanio
          </a>
        </div>
      </section>
    </div>
  );
}
