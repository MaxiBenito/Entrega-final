const cars = [
    { id: 1, nombre: 'kangoo', precio: 5000, year: 20, km:20000, imagen: 'auto1.jpeg' },
  
];

localStorage.setItem('cars', JSON.stringify(cars));

function generadorDeCards() {
    const contenedor = document.getElementById('car-cards1');

    cars.forEach(car => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <img src="${car.imagen}" alt="${car.nombre}">
            <h3>${car.nombre}</h3>
            <p>Precio: $${car.precio}</p>
            <p>Año:${car.year}</p>
            <p>Km:${car.km}</p>
            <button>Ver</button>
        `;

        const button = card.querySelector('button');
        button.addEventListener('click', () => {
        window.location.href = `autos.html?id=${car.id}`;
        })

       
        contenedor.appendChild(card);
    });
}

generadorDeCards();