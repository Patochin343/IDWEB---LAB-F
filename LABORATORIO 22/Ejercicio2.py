import requests

def obtener_primeros_pokemon():
    # Usamos el parámetro 'limit=10' para no traer los 1000+ pokémon
    url = "https://pokeapi.co/api/v2/pokemon?limit=10"

    try:
        response = requests.get(url)
        
        # Verificamos si la conexión fue exitosa
        if response.status_code == 200:
            data = response.json()
            resultados = data['results'] # Aquí está la lista de diccionarios
            
            print("--- LISTA DE LOS PRIMEROS 10 POKÉMON ---")
            
            # Recorremos la lista. 'enumerate' nos ayuda a ponerle número (1, 2, 3...)
            for i, pokemon in enumerate(resultados, start=1):
                nombre = pokemon['name'].capitalize() # Ponemos mayúscula inicial
                print(f"{i}. {nombre}")
                
        else:
            print(f"Error en la API. Código: {response.status_code}")

    except Exception as e:
        print(f"Ocurrió un error de conexión: {e}")

if __name__ == "__main__":
    obtener_primeros_pokemon()