from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/sumar', methods=['POST'])
def sumar_numeros():
    # 1. Obtenemos el JSON que nos enviaron
    datos = request.get_json()
    
    # 2. Extraemos los valores (con un poco de seguridad básica)
    # Si no envían 'a' o 'b', usamos 0 por defecto para que no falle
    a = datos.get('a', 0)
    b = datos.get('b', 0)
    
    # 3. Hacemos la suma
    resultado = a + b
    
    print(f"Recibí: {a} y {b}. Resultado: {resultado}")
    
    # 4. Devolvemos la respuesta en JSON
    return jsonify({
        "operacion": f"{a} + {b}",
        "resultado": resultado
    })

if __name__ == '__main__':
    app.run(debug=True, port=5000)