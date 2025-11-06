const listaEmpleados = [
  { id: 1, nombre: "Juan", area: "Ventas", salario: 2400 },
  { id: 2, nombre: "Marta", area: "Ventas", salario: 2600 },
  { id: 3, nombre: "Luis", area: "TI", salario: 4000 },
  { id: 4, nombre: "Ana", area: "Recursos Humanos", salario: 3000 }
];

const gestionarEmpleados = (empleados) => {
  const mapTemporal = new Map();

  for (const emp of empleados) {
    const area = emp.area;

    if (!mapTemporal.has(area)) {
      mapTemporal.set(area, {
        empleados: [],
        totalSalario: 0,
        cantidad: 0
      });
    }
    const dataArea = mapTemporal.get(area);
    
    dataArea.empleados.push(emp.nombre);
    dataArea.totalSalario += emp.salario;
    dataArea.cantidad++;
  }
  const mapFinal = new Map();
  
  for (const [area, data] of mapTemporal.entries()) {
    mapFinal.set(area, {
      empleados: data.empleados,
      promedio: data.totalSalario / data.cantidad
    });
  }

  return mapFinal;
};

console.log("--- Ej 14: Gestión Empleados (con Map) ---");
console.log(gestionarEmpleados(listaEmpleados));
console.log("-------------------------------------------");