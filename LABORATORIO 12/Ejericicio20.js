const descargarArchivo = (url, callback) => {
  console.log(`Ej 22: Descargando ${url}...`);
  setTimeout(() => {
    callback(url);
  }, 1500);
};

const alCompletar = (url) => {
  console.log(`Ej 22: Descarga completa de ${url}`);
};

descargarArchivo("http://datos.json", alCompletar);