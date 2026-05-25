
import React from 'react';
import { useContactForm } from '../hooks/useForm';

export const ContactForm: React.FC = () => {
  const {
    Formulario,
    errores,
    Enviar,
    isFormValid,
    handleChange,
    handleSubmit,
    resetForm,
  } = useContactForm();


  if (Enviar) {
    return (
      <div className="max-w-md mx-auto my-8 p-8 text-center rounded-lg border border-blue-200
       bg-blue-50 text-green-800 shadow-md animate-fade-in">
        <h2 className="text-xl font-bold mb-4">
          ¡Registro exitoso! .
        </h2>
        <button 
          onClick={resetForm} 
          className="mt-2 px-6 py-2.5 bg-green-700 hover:bg-green-800 text-white font-semibold rounded-md shadow transition duration-200"
        >
          Registrar otro usuario
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto my-8 p-8 rounded-xl bg-white border border-gray-100 shadow-xl">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Formulario de Registro 
      </h2>
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        
       
        <div className="flex flex-col gap-1.5">
          <label htmlFor="nombre" className="text-sm font-semibold text-gray-700">
            Nombre:
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={Formulario.nombre}
            onChange={handleChange}
            placeholder="Tu nombre completo"
            className={`w-full px-4 py-2.5 text-gray-800 bg-gray-50 border rounded-lg outline-none transition duration-200
               focus:bg-white focus:ring-2
              ${errores.nombre 
                ? 'border-red-400 focus:border-red-500 focus:ring-red-100' 
                : 'border-gray-200 focus:border-blue-500 focus:ring-blue-100'
              }`}
          />
          {errores.nombre && (
            <span className="text-xs font-medium text-red-500 mt-1">{errores.nombre}</span>
          )}
        </div>

       
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-semibold text-gray-700">
            Correo Electrónico:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={Formulario.email}
            onChange={handleChange}
            placeholder="correo@ejemplo.com"
            className={`w-full px-4 py-2.5 text-gray-800 bg-gray-50 border rounded-lg outline-none transition duration-200
               focus:bg-white focus:ring-2
              ${errores.email 
                ? 'border-red-400 focus:border-red-500 focus:ring-red-100' 
                : 'border-gray-200 focus:border-blue-500 focus:ring-blue-100'
              }`}
          />
          {errores.email && (
            <span className="text-xs font-medium text-red-500 mt-1">{errores.email}</span>
          )}
        </div>

     
        <div className="flex flex-col gap-1.5">
          <label htmlFor="contrasena" className="text-sm font-semibold text-gray-700">
            Contraseña:
          </label>
          <input
            type= "password"
            id="contrasena"
            name="contrasena"
            value={Formulario.contrasena}
            onChange={handleChange}
            className={`w-full  px-4 py-2.5 h-[400-px] text-gray-800 bg-gray-50 border rounded-lg outline-none  
              transition duration-200 focus:bg-white focus:ring-2
              ${errores.contrasena 
                ? 'border-red-400 focus:border-red-500 focus:ring-red-100' 
                : 'border-gray-200 focus:border-blue-500 focus:ring-blue-100'
              }`}
          />
          {errores.contrasena && (
            <span className="text-xs font-medium text-red-500 mt-1">{errores.contrasena}</span>
          )}
        </div>

        
        <button
          type="submit"
          disabled={!isFormValid}
          className={`w-full mt-2 py-3 font-bold rounded-lg shadow transition duration-200 tracking-wide
            ${isFormValid 
              ? 'bg-blue-600 hover:bg-blue-700 text-white cursor-pointer hover:shadow-md' 
              : 'bg-gray-200 text-gray-400 cursor-not-allowed shadow-none'
            }`}
        >
          Registrar Usuario
        </button>
      </form>
    </div>
  );
};