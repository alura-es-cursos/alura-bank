/* paso 2 importar validar-cuit */
import esUnCUIT from "./validar-cuit.js";

const camposDeFormulario = document.querySelectorAll("[required");

/* console.log(camposDeFormulario); */

camposDeFormulario.forEach((campo) => {
  campo.addEventListener("blur", () => verificarCampo(campo));
});

function verificarCampo(campo) {
  /* paso 3 crear condicional y llamar a la funcion y pasarle el campo */
  if (campo.name == "cuil" && campo.value.length >= 11) {
    esUnCUIT(campo);
  }
}
