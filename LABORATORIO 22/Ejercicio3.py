from flask import Flask, jsonify

app = Flask(__name__)

# 1. Ruta Raíz (/): Responde con HTML Estático
@app.route('/')
def pagina_inicio():
    # Puedes escribir código HTML directamente aquí
    html_content = """
    <!DOCTYPE html>
    <html>
    <head>
        <title>Mi Servidor Python</title>
        <style>
            body { font-family: sans-serif; text-align: center; padding: 50px; }
            h1 { color: #2c3e50; }
        </style>
    </head>
    <body>
        <h1>Bienvenido a mi Servidor</h1>
        <p>Esta es una respuesta de <b>HTML Estático</b>.</p>
        <p>Prueba ir a <a href="/saludo">/saludo</a> para ver el JSON.</p>
    </body>
    </html>
    """
    return html_content

# 2. Ruta Saludo (/saludo): Responde con JSON
@app.route('/saludo')
def obtener_saludo():
    # jsonify convierte automáticamente el diccionario a JSON 
    # y pone el header 'Content-Type: application/json'
    return jsonify({"msg": "Hola"})

if __name__ == '__main__':
    # debug=True permite que el servidor se recargue si cambias el código
    # port=5000 es el puerto estándar de Flask
    print("Servidor corriendo en http://127.0.0.1:5000")
    app.run(debug=True, port=5000)