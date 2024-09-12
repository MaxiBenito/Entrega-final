const cars = [
    { id: 1, nombre: 'Renault Kangoo', precio: 25000, year: 2020, km:20000, imagen: 'auto1.jpeg' },
    { id: 2, nombre: 'Renault Duster', precio: 30000, year: 2021, km: 120000, imagen: 'auto2.jpeg' },
    { id: 3, nombre: 'Peugeot 408', precio: 40000, year: 2022, km: 120000, imagen: 'auto3.jpg' },
    { id: 4, nombre: 'Fiat Argo', precio: 25000, year: 2020, km: 120000, imagen: 'auto4.jpg' },
    { id: 5, nombre: 'Peugeot Partner', precio: 30000, year: 2021, km: 120000, imagen: 'auto6.jpg' },
    { id: 6, nombre: 'Gol Trend', precio: 40000, year: 2022, km: 120000, imagen: 'auto5.jpeg' },
    { id: 7, nombre: 'Renault Kangoo', precio: 25000, year: 2020, km:20000, imagen: 'auto1.jpeg' },
    { id: 8, nombre: 'Renault Duster', precio: 30000, year: 2021, km: 120000, imagen: 'auto2.jpeg' },
    { id: 9, nombre: 'Peugeot 408', precio: 40000, year: 2022, km: 120000, imagen: 'auto3.jpg' },
    { id: 10, nombre: 'Fiat Argo', precio: 25000, year: 2020, km: 120000, imagen: 'auto4.jpg' },
    { id: 11, nombre: 'Peugeot Partner', precio: 30000, year: 2021, km: 120000, imagen: 'auto6.jpg' },
    { id: 12, nombre: 'Gol Trend', precio: 40000, year: 2022, km: 120000, imagen: 'auto5.jpeg' },
    { id: 9, nombre: 'Peugeot 408', precio: 40000, year: 2022, km: 120000, imagen: 'auto3.jpg' },
    { id: 10, nombre: 'Fiat Argo', precio: 25000, year: 2020, km: 120000, imagen: 'auto4.jpg' },
    { id: 11, nombre: 'Peugeot Partner', precio: 30000, year: 2021, km: 120000, imagen: 'auto6.jpg' },
];

localStorage.setItem('cars', JSON.stringify(cars));

function generadorDeCards() {
    const contenedor = document.getElementById('car-cards');

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
           // Swal.fire("Hola!");
        })

       
        contenedor.appendChild(card);
    });
}

generadorDeCards();