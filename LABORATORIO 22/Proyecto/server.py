import json
import os
import mimetypes
from wsgiref.simple_server import make_server

# --- CONFIGURACIÓN ---
# Detectamos la ruta base donde está este archivo server.py
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
STATIC_DIR = os.path.join(BASE_DIR, 'static')

# Datos iniciales (Base de datos en memoria)
equipos = [
    {"id": 1, "nombre": "Real Madrid", "ciudad": "Madrid", "nivelAtaque": 10, "nivelDefensa": 9},
    {"id": 2, "nombre": "Barcelona", "ciudad": "Barcelona", "nivelAtaque": 9, "nivelDefensa": 8},
    {"id": 3, "nombre": "Melgar", "ciudad": "Arequipa", "nivelAtaque": 5, "nivelDefensa": 4}
]

# --- FUNCIONES AUXILIARES ---

def responder_json(start_response, status, data):
    """Envía una respuesta JSON estándar"""
    response_body = json.dumps(data).encode('utf-8')
    headers = [
        ('Content-Type', 'application/json'),
        ('Content-Length', str(len(response_body)))
    ]
    start_response(status, headers)
    return [response_body]

def servir_archivo_statico(start_response, filename):
    """Lee un archivo del disco y lo envía con el MIME type correcto"""
    # Limpiamos el nombre del archivo para evitar hackeos (ej: ../../windows)
    filename = os.path.basename(filename)
    filepath = os.path.join(STATIC_DIR, filename)

    if not os.path.exists(filepath):
        return responder_json(start_response, '404 Not Found', {"error": "Archivo no encontrado"})

    # Adivinamos el tipo de archivo (ej: .css -> text/css, .png -> image/png)
    mime_type, _ = mimetypes.guess_type(filepath)
    if mime_type is None:
        mime_type = 'application/octet-stream'

    try:
        # Abrimos siempre en modo binario 'rb' para soportar imágenes
        with open(filepath, 'rb') as f:
            content = f.read()
            
        headers = [
            ('Content-Type', mime_type),
            ('Content-Length', str(len(content)))
        ]
        start_response('200 OK', headers)
        return [content]
    except Exception as e:
        return responder_json(start_response, '500 Internal Error', {"error": str(e)})

# --- APLICACIÓN WSGI PRINCIPAL ---

def application(environ, start_response):
    path = environ.get('PATH_INFO', '')
    method = environ.get('REQUEST_METHOD', '')

    # 1. RUTAS ESTÁTICAS (Si la URL empieza con /static/)
    # Ejemplo: /static/styles.css -> Busca styles.css en la carpeta static
    if path.startswith('/static/'):
        filename = path.replace('/static/', '')
        if filename == "": # Si piden solo /static/
            return responder_json(start_response, '404 Not Found', {"error": "Falta nombre archivo"})
        return servir_archivo_statico(start_response, filename)

    # 2. API ENDPOINTS DE EQUIPOS
    
    # A) Listar Equipos (GET /equipos)
    if method == 'GET' and path == '/equipos':
        return responder_json(start_response, '200 OK', equipos)

    # B) Registrar Equipo (POST /equipos)
    elif method == 'POST' and path == '/equipos':
        try:
            content_length = int(environ.get('CONTENT_LENGTH', 0))
            if content_length > 0:
                body = environ['wsgi.input'].read(content_length)
                datos = json.loads(body)
                
                # Crear nuevo ID
                nuevo_id = equipos[-1]['id'] + 1 if equipos else 1
                
                nuevo_equipo = {
                    "id": nuevo_id,
                    "nombre": datos.get('nombre', 'Sin Nombre'),
                    "ciudad": datos.get('ciudad', 'Desconocida'),
                    "nivelAtaque": datos.get('nivelAtaque', 0),
                    "nivelDefensa": datos.get('nivelDefensa', 0)
                }
                
                equipos.append(nuevo_equipo)
                return responder_json(start_response, '201 Created', nuevo_equipo)
            else:
                return responder_json(start_response, '400 Bad Request', {"error": "Sin datos"})
        except Exception as e:
            return responder_json(start_response, '500 Error', {"error": str(e)})

    # C) Consultar por ID (GET /equipos/<id>)
    elif method == 'GET' and path.startswith('/equipos/'):
        parts = path.split('/')
        if len(parts) == 3 and parts[2].isdigit():
            id_buscado = int(parts[2])
            equipo = next((e for e in equipos if e["id"] == id_buscado), None)
            
            if equipo:
                return responder_json(start_response, '200 OK', equipo)
            else:
                return responder_json(start_response, '404 Not Found', {"error": "Equipo no existe"})

    # 3. RUTA POR DEFECTO (Redirigir a index.html o dar error)
    elif path == '/':
        # Opcional: Si entran a la raíz, servimos el index.html
        return servir_archivo_statico(start_response, 'index.html')

    else:
        return responder_json(start_response, '404 Not Found', {"error": "Ruta desconocida"})

if __name__ == '__main__':
    port = 8000
    print(f"--- SERVIDOR WSGI AVANZADO ---")
    print(f"API Equipos: http://localhost:{port}/equipos")
    print(f"Web Estática: http://localhost:{port}/static/index.html")
    
    httpd = make_server('', port, application)
    httpd.serve_forever()