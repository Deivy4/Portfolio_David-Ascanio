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
          <a href="mailto:daviddeveloper24@outlook.com" className="text-blue-500 hover:underline mb-4">
            Correo Electrónico: daviddeveloper24@outlook.com
          </a>
          <a href="tel:+1234567890" className="text-blue-500 hover:underline mb-4">
            Teléfono: 
          </a>
          <a href="https://www.linkedin.com/in/david-ascanio/" className="text-blue-500 hover:underline">
            LinkedIn: linkedin.com/in/david-ascanio
          </a>
        </div>
      </section>
      
      {/* Formulario de Contacto */}
      <section>
        <h2 className="text-3xl font-semibold text-center mb-8 text-white">Envíame un Mensaje</h2>
        <form
          action="https://formspree.io/f/{your-form-id}" // Reemplaza con tu URL de Formspree o servicio de formularios
          method="POST"
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 mb-2">Mensaje</label>
            <textarea
              id="message"
              name="message"
              required
              rows="5"
              className="w-full p-3 border border-gray-300 rounded-md"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 px-6 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
          >
            Enviar Mensaje
          </button>
        </form>
      </section>
    </div>
  );
}
