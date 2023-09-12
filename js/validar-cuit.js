/* Viene del aula Anterior */

export default function esUnCUIT(campo) {
  const cuit = campo.value.replace(/\-/g, "");
  console.log(
    tieneCaracteresRepetidos(cuit),

    validarPrimerosDigitosCUIT(cuit),

    validarDigitoVerificador(cuit)
  );
  /*   if (
    tieneCaracteresRepetidos(cuit) &&
    (validarPrimerosDigitosCUIT(cuit) && validarDigitoVerificador(cuit))
  ) {
    console.log("el cuit " + cuit + "  existe");
  } else {
    console.log("el cuit " + cuit + " NO existe!!!!");
  } */
  if (!tieneCaracteresRepetidos(cuit)) {
    if (validarPrimerosDigitosCUIT(cuit) && validarDigitoVerificador(cuit)) {
      console.log("el Cuit existe");
    } else {
      console.log("el Cuit NO existe");
    }
  } else {
    console.log("Números repetidos");
  }
}

/* version pro */
/* function tieneCaracteresRepetidos(cuit) {
    if (/^(\d)\1+$/.test(cuit)) {
      return true;
    }
    return false;
  }
   */
/* Version simple */
function tieneCaracteresRepetidos(cuit) {
  const numerosRepetidos = [
    "00000000000",
    "11111111111",
    "22222222222",
    "33333333333",
    "44444444444",
    "55555555555",
    "66666666666",
    "77777777777",
    "88888888888",
    "99999999999",
  ];
  return numerosRepetidos.includes(cuit);
}

/* Validar primeros digitos */
function validarPrimerosDigitosCUIT(cuit) {
  let primerosDigitos = Number(cuit.slice(0, 2)); //o substr
  let digitosValidos = [20, 23, 24, 27, 30, 33, 34];

  return digitosValidos.includes(primerosDigitos); // Verificar los primeros dos dígitos
}

/* paso 1  */
//Validar digito verificador
function validarDigitoVerificador(cuit) {
  let digitoVerificador = Number(cuit.slice(-1)); //o substring
  /* verificar en el video */
  // console.log(digitoVerificador);
  let digitos = cuit.substr(0, 10).split("").map(Number);
  /* verificar en el video */
  //console.log(digitos);

  let acumulado = 0;
  let factores = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];

  for (let i = 0; i < digitos.length; i++) {
    acumulado += digitos[i] * factores[i];
  }

  let verificador = 11 - (acumulado % 11);
  if (verificador === 11) {
    verificador = 0;
  }

  return digitoVerificador === verificador;
}
