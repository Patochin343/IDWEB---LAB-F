# Importamos todo lo que hay en el archivo geometria.py
import geometria

print("Bienvenido al sistema de calculo desde un modulo externo")

# Probamos una operacion correcta
print("\nCaso 1: Calculando area (ejemplo ficticio 10 * 5)")
resultado = geometria.procesar_operacion("10 * 5")
if resultado is not None:
    print(f"El resultado recibido es: {resultado}")

# Probamos el error personalizado
print("\nCaso 2: Operador incorrecto")
geometria.procesar_operacion("20 % 5")

# Probamos division por cero
print("\nCaso 3: Division entre cero")
geometria.procesar_operacion("10 / 0")