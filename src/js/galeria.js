document.addEventListener('DOMContentLoaded', function () {
    crearGaleria();
});

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');

    for (let i = 1; i <= 12; i++) {
        const imagen = document.createElement('IMG');
        imagen.src = `build/img/thumb/${i}.jpg`;
        imagen.dataset.imagenId = i;

        imagen.onclick = mostrarImagen;

        const lista = document.createElement('LI');
        lista.appendChild(imagen);

        galeria.appendChild(lista);
        
    }
}

function mostrarImagen(e) {
    const id = parseInt(e.target.dataset.imagenId);

    // Generar imagen
    const imagen = document.createElement('IMG');
    imagen.src = `build/img/grande/${id}.jpg`; 
    
    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');

    // Boton para cerrar la imagen
    const cerrarImagen = document.createElement('P');
    cerrarImagen.textContent = 'X';
    cerrarImagen.classList.add('btn-cerrar')

    overlay.appendChild(cerrarImagen);

    // Cuando se presiona el overlay, cerrar la imagen

    overlay.onclick = function() {
        overlay.remove();
        body.classList.remove('fijar-body');
    }


    // Cerrar imagen cuando se presiona el boton

    cerrarImagen.onclick = function() {
        overlay.remove();
        body.classList.remove('fijar-body');
    }

    // Mostrarla en HTML
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');
}