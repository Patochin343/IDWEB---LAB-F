from wsgiref.simple_server import make_server

def mi_aplicacion(environ, start_response):
    """
    Esta es la función estándar WSGI.
    Recibe:
      - environ: Un diccionario con datos de la petición (rutas, headers, etc).
      - start_response: Una función para enviar el estado y las cabeceras.
    """
    
    # 1. Averiguamos qué ruta pidió el usuario
    ruta = environ.get('PATH_INFO')

    # 2. Definimos la respuesta según la ruta
    if ruta == '/':
        status = '200 OK'
        texto = "Inicio"
    elif ruta == '/saludo':
        status = '200 OK'
        texto = "Hola mundo desde WSGI"
    else:
        status = '404 Not Found'
        texto = "404 Pagina no encontrada"

    # 3. Convertimos el texto a Bytes (WSGI solo habla en bytes)
    datos_bytes = texto.encode('utf-8')

    # 4. Preparamos las cabeceras (Headers)
    headers = [
        ('Content-type', 'text/plain; charset=utf-8'),
        ('Content-Length', str(len(datos_bytes)))
    ]

    # 5. Enviamos la señal de inicio de respuesta
    start_response(status, headers)

    # 6. Devolvemos el contenido en una lista (debe ser iterable)
    return [datos_bytes]

# BLOQUE PARA EJECUTAR EL SERVIDOR
if __name__ == '__main__':
    # Usamos la librería estándar de Python para servir la app
    port = 8000
    httpd = make_server('', port, mi_aplicacion)
    
    print(f"Servidor WSGI puro corriendo en http://localhost:{port}")
    print("Prueba las rutas:")
    print(f" - http://localhost:{port}/")
    print(f" - http://localhost:{port}/saludo")
    print(f" - http://localhost:{port}/otra-cosa (Para ver el error)")
    
    # Mantiene el servidor encendido
    httpd.serve_forever()