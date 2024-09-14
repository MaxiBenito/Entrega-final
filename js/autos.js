const save = JSON.parse(localStorage.getItem('cars'));

    const parametro = new URLSearchParams(window.location.search);
    const autoId = parametro.get('id');
    const auto = save.find(car => car.id == autoId);

        document.getElementById('detalles-auto').innerHTML = `
            <div class="auto-detalles">
                <img class="auto-imagen" src="${auto.imagen}" alt="${auto.nombre}">
                <h2 class="auto-nombre">${auto.nombre}</h2>
                <p class="auto-precio">Precio: $${auto.precio}</p>
                <p class="auto-year">Año: ${auto.year}</p>
                <p class="auto-year">Km: ${auto.km}</p>
                
                <a href="https://wa.me/3543571393?text=${(`Hola, estoy interesado en el ${auto.nombre} con un precio de $${auto.precio}`)}" target="_blank" id="btn" class="whatsapp-button">Me interesa</a>          
              </div>

        `;


        