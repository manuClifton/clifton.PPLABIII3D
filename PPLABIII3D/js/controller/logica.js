
import Anuncio_Mascota from '../entidades/anuncioMascota.js';
import {
    crearTabla,
    limpiar
} from '../entidades/tabla.js';

export function obtenerMascotas(){
    return JSON.parse(localStorage.getItem('animales')) || [];
}
export function obtenerId(){
    return JSON.parse(localStorage.getItem('nextId')) || 100;
}

export function altaMascota(frm, proximoId){
    //pasarle los valores obtenidos en el form
    const nuevaMascota = new Anuncio_Mascota(
        proximoId,
        frm.titulo.value,
        frm.descripcion.value,
        frm.precio.value,
        frm.animal.value,
        frm.raza.value,
        frm.fecha.value,
        frm.vacuna.value
    )
    return nuevaMascota;
}

export function guardarDatos(listaMascotas, proximoId = null){
    localStorage.setItem('animales', JSON.stringify(listaMascotas));
    localStorage.setItem('nextId', proximoId || obtenerId());
}

export function actualizarLista(listaMascotas){
    //divTabla.innerHTML = "<div class='sk-chase'><div class='sk-chase-dot'></div><div class='sk-chase-dot'></div><div class='sk-chase-dot'></div><div class='sk-chase-dot'></div><div class='sk-chase-dot'></div><div class='sk-chase-dot'></div></div>";
    divTabla.innerHTML = "<img src='image/spinner.gif' style=' margin-top: 5vw;'>";
    setTimeout(() => {
        while (divTabla.firstChild) {
            divTabla.removeChild(divTabla.lastChild);
          }
          divTabla.appendChild(crearTabla(listaMascotas));
    }, 3000);
}


export function buscarMascota(id){

    let lista  = obtenerMascotas();
    lista.forEach(element => {
        if(element['id'] == id){
            let frm = document.forms[0];
            frm.titulo.value = element['titulo'],
            frm.descripcion.value = element['descripcion'],
            frm.precio.value = element['precio'],
            frm.animal.value = element['animal'], 
            frm.raza.value = element['raza'],
            frm.fecha.value = element['fecha'],
            frm.vacuna.value = element['vacuna']
        }
    });
}

export function ocultarBotones(){
    const btns = document.getElementsByTagName('button');

    for (let index = 0; index < btns.length; index++) {
        btns[index].classList.toggle('ocultarBtn');
    }
}
