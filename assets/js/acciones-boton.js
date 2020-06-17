const botones = document.querySelectorAll(".boton");

const lista_imagenes = document.querySelectorAll("img");
const imagen_principal = document.querySelector(".imagen_principal");
const datos_imagenes_titulos = document.querySelectorAll('.datos .titulo');
const datos_imagenes_descripcion = document.querySelectorAll('.datos .descripcion');


const colocar_imagenes = (posicion_btn_presionado) => {

    let imagen_url = lista_imagenes[posicion_btn_presionado].src;
    imagen_principal.innerHTML = `<img src = "${imagen_url} ">`;

    datos_imagenes_titulos[0].innerHTML = `<p> ${datos_imagenes_titulos[posicion_btn_presionado].innerHTML }</p>`;
    datos_imagenes_descripcion[0].innerHTML = `<p> ${datos_imagenes_descripcion[posicion_btn_presionado].innerHTML }</p>`;


}
botones[0].addEventListener('click', () => { colocar_imagenes(0); });
botones[1].addEventListener('click', () => { colocar_imagenes(1); });
botones[2].addEventListener('click', () => { colocar_imagenes(2); });
botones[3].addEventListener('click', () => { colocar_imagenes(3); });
botones[4].addEventListener('click', () => { colocar_imagenes(4); });
botones[5].addEventListener('click', () => { colocar_imagenes(5); });
botones[6].addEventListener('click', () => { colocar_imagenes(6); });
botones[7].addEventListener('click', () => { colocar_imagenes(7); });
botones[8].addEventListener('click', () => { colocar_imagenes(8); });
botones[9].addEventListener('click', () => { colocar_imagenes(9); });
botones[10].addEventListener('click', () => { colocar_imagenes(10); });
botones[11].addEventListener('click', () => { colocar_imagenes(11); });
botones[12].addEventListener('click', () => { colocar_imagenes(12); });