import requests

url_base = "http://localhost:8000/libros"

# 1. Listar libros (Debería salir "1984")
print("\n--- LISTA INICIAL ---")
print(requests.get(url_base).json())

# 2. Crear un libro nuevo
print("\n--- CREANDO LIBRO ---")
nuevo = {"titulo": "El Quijote", "autor": "Cervantes", "anio": 1605}
resp = requests.post(url_base, json=nuevo)
print("Respuesta:", resp.json()) 
# Debería devolver el libro con "id": 2

# 3. Buscar por ID específico
print("\n--- BUSCANDO ID 2 ---")
print(requests.get(f"{url_base}/2").json())

# 4. Buscar uno que no existe
print("\n--- BUSCANDO ID 99 (ERROR) ---")
print(requests.get(f"{url_base}/99").status_code)