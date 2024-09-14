document.addEventListener('DOMContentLoaded', function () {
    // Datos del negocio
    const businessData = {
        name: 'Taller Mecánico El Rápido',
        description: 'Ofrecemos los mejores servicios de mecánica general para tu vehículo. Contamos con años de experiencia y personal calificado.',
        phone: '+54 3543 571393',
        address: 'Calle Falsa 123, Córdoba, Argentina',
        image: 'https://via.placeholder.com/300x200', // Ruta de la imagen del negocio
        googleMapsUrl: 'https://goo.gl/maps/XXXXXX'
    };

    // Crear la card del negocio
    const cardContainer = document.getElementById('info');
    const businessCard = `
        <div class="business-card">
            <img src="${businessData.image}" alt="Negocio">
            <h2>${businessData.name}</h2>
            <p>${businessData.description}</p>
            <p><strong>Dirección:</strong> ${businessData.address}</p>
            <p><strong>Teléfono:</strong> <a href="tel:${businessData.phone}">${businessData.phone}</a></p>
            <a href="${businessData.googleMapsUrl}" target="_blank">Ver en Google Maps</a>
        </div>
    `;

    // Insertar la card en el contenedor
    cardContainer.innerHTML = businessCard;
});