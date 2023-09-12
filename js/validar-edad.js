export default function esMayorDeEdad(campo) {
  const fechaNacimiento = new Date(campo.value);
  //console.log(fechaNacimiento);
  validarEdad(fechaNacimiento);
  console.log(validarEdad(fechaNacimiento));
}

//construir
function validarEdad(fecha) {
  const fechaActual = new Date();
  const fechaMas18 = new Date(
    fecha.getUTCFullYear() + 18,
    fecha.getUTCMonth(),
    fecha.getUTCDate()
  );
  return fechaActual >= fechaMas18;
}
