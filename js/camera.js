const botonAbrirCamara = document.querySelector("[data-video-boton]");
const campoCamara = document.querySelector("[data-camera]");
const video = document.querySelector("[data-video]");

const botonTomarFoto = document.querySelector("[data-tomar-foto]");
const canvas = document.querySelector("[data-video-canvas]");
const mensaje = document.querySelector("[data-mensaje]");

let imagenURL = "";
const botonEnviar = document.querySelector("[data-enviar]");

botonAbrirCamara.addEventListener("click", async () => {
  const iniciarVideo = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false,
  });
  botonAbrirCamara.style.display = "none";
  campoCamara.style.display = "block";
  video.srcObject = iniciarVideo;
});

botonTomarFoto.addEventListener("click", () => {
  canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
  imagenURL = canvas.toDataURL("image/jpeg");
  campoCamara.style.display = "none";
  mensaje.style.display = "block";
});

botonEnviar.addEventListener("click", () => {
  const recibirDatosGuardados = localStorage.getItem("registro");
  const convertirDatos = JSON.parse(recibirDatosGuardados);
  convertirDatos.img_url = imagenURL;
  localStorage.setItem("registro", JSON.stringify(convertirDatos));

  window.location.href = "./abrir-cuenta-form-3.html";
});
