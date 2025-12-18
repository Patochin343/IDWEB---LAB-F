import requests

url = "http://127.0.0.1:5000/sumar"
datos_a_enviar = {"a": 5, "b": 3}

# Note el argumento json=... esto envía automáticamente los headers correctos
respuesta = requests.post(url, json=datos_a_enviar)

print("Respuesta del servidor:")
print(respuesta.json())