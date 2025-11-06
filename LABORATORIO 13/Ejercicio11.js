const tiendaA = { laptop: 3500.5, mouse: 100.35, teclado: 250.9 };
const tiendaB = { mouse: 95.2, monitor: 720.457, teclado: 260.1 };

const combinarCatalogos = (tiendaA, tiendaB) => {
  const catalogoFinal = { ...tiendaA, ...tiendaB };

  for (const producto in catalogoFinal) {
    
    if (tiendaA.hasOwnProperty(producto) && tiendaB.hasOwnProperty(producto)) {
      catalogoFinal[producto] = Math.min(tiendaA[producto], tiendaB[producto]);
    }
    
    catalogoFinal[producto] = Math.round(catalogoFinal[producto] * 100) / 100;
    
  }
  
  return catalogoFinal;
};

console.log("Ej 13:", combinarCatalogos(tiendaA, tiendaB));