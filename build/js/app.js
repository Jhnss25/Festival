const galeria = document.querySelector('#galery');
const body = document.querySelector('body');

document.addEventListener('DOMContentLoaded', () => {
    iniciarApp();
});

function iniciarApp() {
    window.onscroll = navScroll;
    
    crearGaleria();

    galeria.addEventListener('click', efectoAmpliacion);
}

function navScroll() {
    const elemento = document.querySelector('#main-header');

    elemento.classList.toggle('header--active', window.scrollY > 1100);
}

function crearGaleria() {

    for (let i = 1; i <= 12; i++) {
        const li = document.createElement('li');
        const picture = document.createElement('picture');
        const source = document.createElement('source');
        const img = document.createElement('img');

        // class
        li.classList.add('galeria__li');
        img.classList.add('galeria__imagen');

        // atrubuttes
        source.setAttribute('srcset', `/build/img/thumb/${i}.webp`);
        source.setAttribute('type', 'image/webp');
        img.setAttribute('src', `/build/img/thumb/${i}.jpg`);
        img.setAttribute('alt', `imagen galería ${i}`);

        // añadir imagenes
        picture.appendChild(source);
        picture.appendChild(img);
        li.appendChild(picture);
        galeria.appendChild(li);
    }
}

function efectoAmpliacion(e) {

    const clickImagen = e.target.classList.contains('galeria__imagen');

    if (clickImagen) {
       const imagenGrande = e.target.src.replace('thumb', 'grande');
        
        const div = document.createElement('div');
        const divImagen = document.createElement('div');
        const eliminar = document.createElement('p');
        const picture = document.createElement('picture');
        const source = document.createElement('source');
        const img = document.createElement('img');

        // class
        body.classList.add('fijo');
        div.classList.add('overlay');
        divImagen.classList.add('overlay__div-imagen');
        eliminar.classList.add('overlay__eliminar');
        img.classList.add('overlay__imagen');

        // atributos
        source.srcset = imagenGrande.replace('jpg', 'webp');
        source.setAttribute('type', 'image/webp');
        img.src = imagenGrande;
        img.alt = e.target.alt;

        // contenido
        eliminar.textContent = "X";

        // agregar
        picture.appendChild(source);
        picture.appendChild(img);
        divImagen.appendChild(picture);
        divImagen.appendChild(eliminar);
        div.appendChild(divImagen);
        body.appendChild(div);

        eliminar.onclick = () => {
            body.classList.remove('fijo');
            div.remove();
        }
    }
}