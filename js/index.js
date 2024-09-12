const autos = [
    {
        nombre: 'Nueva Nissan Frontier X-Gear 2025 ',
        imagen: 'FrontierX.webp',
        descripcion: 'Se comienza a vender en Argentina la tercera generación de la exitosa Frontier X-Gear, con nuevos detalles aventureros.',
        link: 'https://nissancapital.com/frontier/?gad_source=1&gclid=CjwKCAjw_4S3BhAAEiwA_64YhvwiRkhC9mnjZzWca9_ieO9Xbwwa_7PQ3vtwpUhzl9UUU3xxNBmKNRoCIzIQAvD_BwE'
    },
    {
        nombre: 'El nuevo Megane E-Tech',
        imagen: 'https://autocity.com.ar/wp-content/uploads/2024/06/Megane-etech-foto-2-1536x1025.jpg',
        descripcion: 'A paso firme, Renault está trabajando en un cambio de imagen en Argentina',
        link: 'https://www.renault.com.ar/vehiculos-electricos/megane-etech.html'
    },
    {
        nombre: 'La Rampage Moparizada',
        imagen: 'https://autocity.com.ar/wp-content/uploads/2024/07/1-23-1536x1022.jpg',
        descripcion: 'Luego de una exhibición única, cada vez más usuarios adquieren accesorios originales para personalizar su nueva Rampage.',
        link: 'https://www.lavoz.com.ar/espacio-publicidad/autocity-te-muestra-la-nueva-rampage-moparizada-con-todos-sus-accesorios/'
    },
    {
        nombre: 'El nuevo Megane E-Tech',
        imagen: 'https://autocity.com.ar/wp-content/uploads/2024/06/Megane-etech-foto-2-1536x1025.jpg',
        descripcion: 'A paso firme, Renault está trabajando en un cambio de imagen en Argentina',
        link: 'https://autocity.com.ar/novedades/el-nuevo-megane-e-tech-ya-esta-en-autocity/'
    },
    {
        nombre: 'Auto 3',
        imagen: 'https://via.placeholder.com/300x200',
        descripcion: 'Descripción del Auto 3',
        link: '#'
    }
];
const cardsContainer = document.getElementById('cards-container');

function crearCard(auto) {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
        <img src="${auto.imagen}" alt="${auto.nombre}">
        <h3>${auto.nombre}</h3>
        <p>${auto.descripcion}</p>
        <a href="${auto.link}">Más información</a>
    `;
    cardsContainer.appendChild(card);
}

// Generar las cards dinámicamente
autos.forEach(auto => crearCard(auto));