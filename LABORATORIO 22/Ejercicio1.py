import requests

def consultar_httpbin():
    url = "https://httpbin.org/get"
    
    # 1. Hacemos la petición GET
    # Podemos enviar parámetros (args) de prueba para verlos en la respuesta
    params = {'curso': 'python', 'nivel': 'intermedio'}
    
    try:
        response = requests.get(url, params=params)
        
        # Verificamos que la petición fue exitosa (código 200)
        response.raise_for_status()
        
        # 2. Convertimos la respuesta JSON a un diccionario de Python
        datos = response.json()
        
        # 3. Mostramos la información solicitada
        print("--- RESULTADOS DE LA PETICIÓN ---")
        
        # IP de origen (En httpbin viene bajo la clave 'origin')
        print(f"1. IP de origen: {datos.get('origin')}")
        
        # Headers (Cabeceras enviadas)
        print("\n2. Headers:")
        for key, value in datos.get('headers', {}).items():
            print(f"   - {key}: {value}")
            
        # Args (Argumentos/Parámetros de la URL)
        print("\n3. Args (Parámetros):")
        for key, value in datos.get('args', {}).items():
            print(f"   - {key}: {value}")

    except requests.exceptions.RequestException as e:
        print(f"Error al realizar la petición: {e}")

if __name__ == "__main__":
    consultar_httpbin()