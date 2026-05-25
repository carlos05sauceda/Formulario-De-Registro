export interface Formulario {
    nombre: string;
    email: string;
    contrasena: string;
}

export interface ErroresFormulario {
  nombre?: string;
  email?: string;
  contrasena?: string;
}