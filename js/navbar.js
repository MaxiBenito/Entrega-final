const cuerpo = document.body;
const header = document.querySelector('#header');
const navegacion = document.createElement('div');
const nav = document.createElement('nav');
const ul = document.createElement('ul');

const enlaces = [
    {
        link: "index",
        nombre: "Inicio"
    },
    {
        link: "usados",
        nombre: "Usados"
    },
    {
        link: "contacto",
        nombre: "Contacto"
    }
]

header.appendChild(navegacion);
navegacion.appendChild(nav);
nav.appendChild(ul);
navegacion.className = "navbar";


enlaces.forEach(enlace => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `${enlace.link}.html`; // Establece el atributo href del enlace
    a.textContent = enlace.nombre;  // Establece el texto del enlace
    li.appendChild(a);              // Agrega el enlace dentro del elemento 'li'
    ul.appendChild(li);             // Agrega el 'li' dentro del 'ul'
});

