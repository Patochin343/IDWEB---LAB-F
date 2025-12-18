import requests

# URL de tu servidor local
url = "http://127.0.0.1:5000/sumar"

# Datos (Diccionario de Python normal)
datos = {"a": 10, "b": 20}

try:
    # Python convierte automáticamente el diccionario a JSON válido con comillas dobles
    respuesta = requests.post(url, json=datos)
    
    print("Estado:", respuesta.status_code)
    print("Respuesta del servidor:", respuesta.json())
except Exception as e:
    print("Error:", e)