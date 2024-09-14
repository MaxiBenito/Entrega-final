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
        nombre: 'Llego el nuevo 208 Feline',
        imagen: 'https://www.peugeotstore.com.ar/uploads/imagenes/imagen_1855.png',
        descripcion: 'Se comienza a vender en Argentina el renovado Peugeot 208',
        link: 'https://www.peugeotstore.com.ar/208'
    },
    {
        nombre: 'Nuevo Volkswagen T-Cross',
        imagen: 'https://autocity.com.ar/wp-content/uploads/2024/07/Nuevo-T-Cross-Julio2024-4-1536x864.jpg',
        descripcion: 'Se lanza en Argentina la renovación del T-Cross, uno de los SUVs más queridos por el público argentino.',
        link: 'https://www.volkswagen.com.ar/es/formularios/presupuesto.html?adchan=oa&country=AR&publisher=google&adpl=google&campaign=tcross-cc&adplt=no&format=exact&adcr=rsa&seatype=branded&adgroup=inst_[exact]_tcross&language=AR&adpay=paid&adap=tcross&adchan=sem&campaign=10040925_NC_IMC_PAO_LDS_VWB_VWB_BRD_ARG_NU_SEAH_PSEAC_TEAD_NU_GAD_GADW_CPL_NU_NU_NU_NU_CXD_ES_BR_BRAP_TCROSS-CC-10086212&adgroup=Inst_%5Bexact%5D_tcross&publisher=GOOGLE&adcr=t+cross+precio&adpl=GOOGLE&adlid=71700000053020191&country=AR&language=ES&&gad_source=1&gclid=CjwKCAjwxY-3BhAuEiwAu7Y6s0nr7j_yZmDbqHH1efth71tYn9FI5BjQ8-wGVVaj0wz2YY_BKSsCrxoCVqwQAvD_BwE&gclsrc=aw.ds'
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


autos.forEach(auto => crearCard(auto));