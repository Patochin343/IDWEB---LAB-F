import json
from wsgiref.simple_server import make_server

# 1. Base de datos en memoria (Lista de diccionarios)
libros = [
    {"id": 1, "titulo": "1984", "autor": "George Orwell", "anio": 1949}
]

# Función auxiliar para responder JSON fácilmente
def responder_json(start_response, status, data):
    response_body = json.dumps(data).encode('utf-8')
    headers = [
        ('Content-Type', 'application/json'),
        ('Content-Length', str(len(response_body)))
    ]
    start_response(status, headers)
    return [response_body]

# Aplicación WSGI Principal
def application(environ, start_response):
    # Obtenemos la ruta y el método HTTP
    path = environ.get('PATH_INFO', '')
    method = environ.get('REQUEST_METHOD', '')

    # A) LISTAR LIBROS (GET /libros)
    if method == 'GET' and path == '/libros':
        return responder_json(start_response, '200 OK', libros)

    # B) REGISTRAR LIBRO (POST /libros)
    elif method == 'POST' and path == '/libros':
        try:
            # 1. Averiguar el tamaño de los datos enviados
            try:
                content_length = int(environ.get('CONTENT_LENGTH', 0))
            except (ValueError, TypeError):
                content_length = 0

            # 2. Leer el cuerpo de la petición (el JSON que nos envían)
            if content_length > 0:
                body = environ['wsgi.input'].read(content_length)
                datos_nuevos = json.loads(body)
                
                # 3. Generar ID automático (el último + 1)
                nuevo_id = libros[-1]['id'] + 1 if libros else 1
                
                # 4. Crear el objeto libro
                nuevo_libro = {
                    "id": nuevo_id,
                    "titulo": datos_nuevos.get('titulo'),
                    "autor": datos_nuevos.get('autor'),
                    "anio": datos_nuevos.get('anio')
                }
                
                # 5. Guardar y responder
                libros.append(nuevo_libro)
                return responder_json(start_response, '201 Created', nuevo_libro)
            else:
                return responder_json(start_response, '400 Bad Request', {"error": "Cuerpo vacio"})

        except Exception as e:
            return responder_json(start_response, '500 Internal Error', {"error": str(e)})

    # C) CONSULTAR UN LIBRO POR ID (GET /libros/<id>)
    elif method == 'GET' and path.startswith('/libros/'):
        # Extraemos el ID de la URL
        try:
            parts = path.split('/')
            # Verificamos que la ruta tenga el formato correcto y el ID sea numérico
            if len(parts) == 3 and parts[2].isdigit():
                id_solicitado = int(parts[2])
                
                # Buscamos el libro en la lista
                resultado = next((libro for libro in libros if libro["id"] == id_solicitado), None)
                
                if resultado:
                    return responder_json(start_response, '200 OK', resultado)
                else:
                    return responder_json(start_response, '404 Not Found', {"error": "Libro no encontrado"})
            else:
                 return responder_json(start_response, '400 Bad Request', {"error": "ID invalido"})

        except ValueError:
             return responder_json(start_response, '400 Bad Request', {"error": "Error procesando ID"})

    # RUTA NO ENCONTRADA
    else:
        return responder_json(start_response, '404 Not Found', {"error": "Ruta no existe"})

if __name__ == '__main__':
    port = 8000
    httpd = make_server('', port, application)
    print(f"Servidor de Libros corriendo en http://localhost:{port}")
    httpd.serve_forever()