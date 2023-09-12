import esUnCUIT from "./validar-cuit.js";

const camposDeFormulario = document.querySelectorAll("[required");


camposDeFormulario.forEach((campo) => {
  campo.addEventListener("blur", () => verificarCampo(campo));
});

function verificarCampo(campo) {
  if (campo.name == "cuil" && campo.value.length >= 11) {
    esUnCUIT(campo);
  }
}
