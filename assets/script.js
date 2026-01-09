

const propiedades_venta = [
  {
    nombre: "Depto Centro",
    descripcion: "Cerca del metro",
    ubicacion: "Santiago",
    habitaciones: 2,
    costo: 95000000,
    pets: true,
    smoke: false
  },
  {
    nombre: "Casa Ñuñoa",
    descripcion: "Amplia y luminosa",
    ubicacion: "Ñuñoa",
    habitaciones: 4,
    costo: 180000000,
    pets: false,
    smoke: true
  },
  {
    nombre: "Depto Providencia",
    descripcion: "Excelente conectividad",
    ubicacion: "Providencia",
    habitaciones: 1,
    costo: 120000000,
    pets: true,
    smoke: false
  }
];

const propiedades_alquiler = [
  {
    nombre: "Depto Studio",
    descripcion: "Ideal estudiante",
    ubicacion: "Providencia",
    habitaciones: 1,
    costo: 400000,
    pets: false,
    smoke: false
  },
  {
    nombre: "Casa Familiar",
    descripcion: "Patio grande",
    ubicacion: "La Florida",
    habitaciones: 3,
    costo: 650000,
    pets: true,
    smoke: true
  },
  {
    nombre: "Depto Las Condes",
    descripcion: "Moderno y seguro",
    ubicacion: "Las Condes",
    habitaciones: 2,
    costo: 750000,
    pets: false,
    smoke: false
  }
];

function renderizarPropiedades(propiedades, idContenedor, limite) {
  const contenedor = document.querySelector(idContenedor);
  if (!contenedor) return;

  let html = "";

  for (let i = 0; i < propiedades.length && i < limite; i++) {
    const prop = propiedades[i];

    const petsText = prop.pets
      ? "🐶 Mascotas permitidas"
      : "🚫 No se permiten mascotas";

    const smokeText = prop.smoke
      ? "🚬 Se puede fumar"
      : "🚭 No se puede fumar";

    html += `
      <div class="card">
        <h3 class="card-title">${prop.nombre}</h3>
        <p>${prop.descripcion}</p>
        <p>📍 ${prop.ubicacion}</p>
        <p>🛏 ${prop.habitaciones} habitaciones</p>
        <p class="card-price">💰 $${prop.costo}</p>
        <p class="card-extra">${petsText}</p>
        <p class="card-extra">${smokeText}</p>
      </div>
    `;
  }

  contenedor.innerHTML = html;
}

renderizarPropiedades(propiedades_venta, "#venta", 3);
renderizarPropiedades(propiedades_alquiler, "#alquiler", 3);

