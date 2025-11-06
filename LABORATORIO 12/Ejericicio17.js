const mostrarDatos = (nombre, edad, ...hobbies) => {
  console.log(`--- Ej 19: Datos ---`);
  console.log(`Nombre: ${nombre}`);
  console.log(`Edad: ${edad}`);
  console.log(`Hobbies: ${hobbies.length > 0 ? hobbies.join(', ') : 'Ninguno'}`);
  console.log(`----------------------`);
};

mostrarDatos("Carlos", 30, "Leer", "Correr", "Programar");
mostrarDatos("Elena", 25); 