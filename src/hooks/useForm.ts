// src/components/ContactForm/useContactForm.ts
import { useState,  } from 'react';
import type {ChangeEvent, FormEvent} from 'react'
import type { Formulario, ErroresFormulario } from '../types/Formulario';

export const useContactForm = () => {
  const [Formulario, setFormulario] = useState<Formulario>({
    nombre: '',
    email: '',
    contrasena: '',
  });

  const [errores, setErrores] = useState<ErroresFormulario>({});
  const [Enviar, setEnviar] = useState<boolean>(false);

  
  const validate = (nombre: string, value: string): string => {
    let errorMensaje = '';

    if (nombre === 'nombre') {
      if (value.trim() === '') {
        errorMensaje = 'El nombre es obligatorio.';
      } else if (value.trim().length < 10) {
        errorMensaje = 'El nombre debe tener al menos 10 caracteres'
      }
      
    }

  
    if (nombre === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (value.trim() === '') {
        errorMensaje = 'El correo electrónico es obligatorio.';
      } else if (!emailRegex.test(value)) {
        errorMensaje = 'Por favor, introduce un correo electrónico válido.';
      }
    }

     if (nombre === 'contrasena') {
      if (value.trim() === '') {
        errorMensaje = 'La contraseña es obligatoria.';
      } else if (value.trim().length < 10) {
        errorMensaje = 'La contraseña tener al menos 10 caracteres'
      }
      
    }

    

    return errorMensaje;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormulario((prev) => ({
      ...prev,
      [name]: value,
    }));

    const errorMensaje = validate(name, value);
    setErrores((prev) => ({
      ...prev,
      [name]: errorMensaje,
    }));
  };

  
  const isFormValid =
    
    Formulario.nombre.trim() !== '' &&
    Formulario.email.trim() !== '' &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Formulario.email) &&
    Formulario.contrasena.trim().length >= 10 &&
    !errores.nombre &&
    !errores.email &&
    !errores.contrasena;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isFormValid) {
      console.log('Datos enviados con éxito a la cartera de Carlos:', Formulario);
      setEnviar(true);
      setFormulario({ nombre: '', email: '', contrasena: '' });
    }
  };

  const resetForm = () => setEnviar(false);

  return {
    Formulario,
    errores,
    Enviar,
    isFormValid,
    handleChange,
    handleSubmit,
    resetForm,
  };
};