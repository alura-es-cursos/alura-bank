export const tiposError = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "tooShort",
  "customError",
];
export const mensajes = {
  nombre: {
    valueMissing: "El campo nombre no puede estar vacío.",
    patternMismatch: "Por favor, ingrese un nombre válido.",
    tooShort: "Por favor, ingrese un nombre válido.",
  },
  email: {
    valueMissing: "El campo email no puede estar vacío.",
    typeMismatch: "Por favor, ingrese un email válido.",
    tooShort: "Por favor, ingrese un e-mail válido.",
  },
  identificacion: {
    valueMissing: "El campo identificación no puede estar vacío.",
    patternMismatch: "Por favor, ingrese un número de identificación válido.",
    tooShort: "El campo no tiene caracteres suficientes.",
  },
  cuil: {
    valueMissing: "El campo cuil/cuit no puede estar vacío.",
    patternMismatch: "Por favor, ingrese un cuil/cuit válido.",
    customError: "El cuil/cuit ingresado no existe.",
    tooShort: "El campo no tiene caracteres suficientes.",
  },
  fecha_nacimiento: {
    valueMissing: "El campo fecha nacimiento no puede estar vacío.",
    customError: "Debes ser mayor de 18 años para registrarte.",
  },
  terminos: {
    valueMissing: "Debes aceptar los términos antes de continuar.",
  },
};
