let contador = 0;
let numeroExpediente = 0;
const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", function(event){
    event.preventDefault();
    const nombre = document.getElementById("nombre").value.trim();
    const lugar = document.getElementById("lugar").value.trim();
    const testigos = Number(document.getElementById("testigos").value);
    const video = document.getElementById("video").value;
    const imagen = document.getElementById("imagen").value;
    const radar = document.getElementById("radar").value;
    const explicacion = document.getElementById("explicacion").value;
    const descripcion = document.getElementById("descripcion").value.trim();
    // parte 1
    if(video === "si"){
    const archivoVideo =
    document.getElementById("archivoVideo").files.length;
    if(archivoVideo === 0){
        alert("Debe adjuntar un video.");
        return;
    }
}
if(imagen === "si"){
    const archivoImagen =
    document.getElementById("archivoImagen").files.length;
    if(archivoImagen === 0){
        alert("Debe adjuntar una imagen.");
        return;
    }
}
// parte 2
    if(
        nombre === "" ||
        lugar === "" ||
        descripcion === "" ||
        video === "" ||
        imagen === "" ||
        radar === "" ||
        explicacion === ""
    ){
        alert("Complete todos los campos.");
        return;
    }
    let puntos = 0;
    if(video === "si") puntos += 3;
    if(imagen === "si") puntos += 2;
    if(radar === "si") puntos += 4;
    if(testigos > 3) puntos += 2;
    if(explicacion === "no") puntos += 3;
    let clasificacion = "";
    let mensaje = "";
    let color = "";
    if(puntos <= 4){
        clasificacion = "Evidencia Débil";
        mensaje = "La información es insuficiente para considerar el caso relevante.";
        color = "#EF4444";
    }else if(puntos <= 8){
        clasificacion = "Evidencia Moderada";
        mensaje = "Se recomienda una investigación adicional.";
        color = "#EAB308";
    }else{
        clasificacion = "Evidencia Fuerte";
        mensaje = "Caso prioritario para análisis especializado.";
        color = "#22C55E";
    }

    let icono = "";
    if(puntos <= 4){
        icono = "🔴";
    }else if(puntos <= 8){
        icono = "🟡";
    }else{
        icono = "🟢";
    }

    numeroExpediente++;
    const codigoExpediente =
    "EXP-" + String(numeroExpediente).padStart(3,"0");


    
    document.getElementById("resultado").style.display = "block";

    document.getElementById("puntaje").textContent = puntos;

    document.getElementById("clasificacion").textContent = clasificacion;

    document.getElementById("mensaje").textContent = mensaje;

    document.getElementById("fecha").textContent =
        new Date().toLocaleString();

    document.getElementById("resultado").style.borderLeft =
        "8px solid " + color;

    const progreso = document.getElementById("progreso");

    progreso.style.background = color;
    progreso.style.width = (puntos / 14) * 100 + "%";

    contador++;

    document.getElementById("contador").textContent = contador;

    const historial = document.getElementById("listaHistorial");
    historial.innerHTML += `
    <div class="historial-item">
        <div class="codigo-expediente">
            ${codigoExpediente}
        </div>

        <h3>${nombre}</h3>

        <p>
            ${icono} ${clasificacion}
        </p>

        <small>
            ${new Date().toLocaleString()}
        </small>
    </div>
    `;

});
const selectVideo = document.getElementById("video");
const selectImagen = document.getElementById("imagen");

selectVideo.addEventListener("change", () => {

    const contenedor =
        document.getElementById("contenedorVideo");

    if(selectVideo.value === "si"){
        contenedor.style.display = "block";
    }else{
        contenedor.style.display = "none";
    }

});
selectImagen.addEventListener("change", () => {

    const contenedor =
        document.getElementById("contenedorImagen");

    if(selectImagen.value === "si"){
        contenedor.style.display = "block";
    }else{
        contenedor.style.display = "none";
    }

});
