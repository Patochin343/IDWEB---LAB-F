import json

# 1. Creamos la lista de diccionarios
equipos_futbol = [
    {
        "Nombre": "Real Madrid",
        "pais": "España",
        "nivelAtaque": 89,
        "nivelDefensa": 85
    },
    {
        "Nombre": "Manchester City",
        "pais": "Inglaterra",
        "nivelAtaque": 91,
        "nivelDefensa": 87
    },
    {
        "Nombre": "Bayern Múnich",
        "pais": "Alemania",
        "nivelAtaque": 88,
        "nivelDefensa": 84
    },
    {
        "Nombre": "Boca Juniors",
        "pais": "Argentina",
        "nivelAtaque": 79,
        "nivelDefensa": 80
    }
]

# 2. Convertimos la lista a una cadena JSON con formato
# indent=4 agrega la sangría para que sea legible
# ensure_ascii=False permite imprimir caracteres especiales (tildes, ñ)
json_legible = json.dumps(equipos_futbol, indent=4, ensure_ascii=False)

# 3. Mostramos en pantalla
print("--- Resultado JSON formateado ---")
print(json_legible)