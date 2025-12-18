# Definimos nuestra propia excepción (clase de error)
# Esto sirve para crear errores personalizados que Python no trae por defecto
class OperadorNoValidoError(Exception):
    pass

def procesar_operacion(texto_operacion):
    try:
        # Intentamos separar el texto en 3 partes
        # Se asume que hay espacios entre los números y el operador
        partes = texto_operacion.split()
        
        # Una pequeña validación extra por si escriben "10+2" sin espacios
        if len(partes) != 3:
            print("Error de formato: Asegúrate de escribir numero espacio operador espacio numero (Ej: 10 / 2)")
            return

        # Aquí intentamos convertir los textos a números (floats)
        # Si esto falla, Python lanzará automáticamente un ValueError
        num1 = float(partes[0])
        operador = partes[1]
        num2 = float(partes[2])

        resultado = 0

        # Verificamos qué operación quiere hacer el usuario
        if operador == '+':
            resultado = num1 + num2
        elif operador == '-':
            resultado = num1 - num2
        elif operador == '*':
            resultado = num1 * num2
        elif operador == '/':
            # Si num2 es 0, Python lanzará ZeroDivisionError automáticamente al dividir
            resultado = num1 / num2
        else:
            # Si llegamos aquí, es porque el operador no es +, -, * o /
            # Así que levantamos (raise) nuestra excepción personalizada
            raise OperadorNoValidoError(f"El símbolo '{operador}' no es válido.")

        # Si todo salió bien, mostramos el resultado
        print(f"Resultado: {resultado}")

    except ValueError:
        # Esto atrapa el error si float() falla (ej: convertir "hola" a número)
        print("Error de Valor: Asegúrate de que los dos componentes sean números válidos.")

    except ZeroDivisionError:
        # Esto atrapa el error matemático de dividir por cero
        print("Error Matemático: No se puede dividir un número entre cero.")

    except OperadorNoValidoError as e:
        # Esto atrapa nuestra excepción personalizada
        print(f"Error de Operador: {e}")

    except Exception as e:
        # Esto atrapa cualquier otro error inesperado
        print(f"Ocurrió un error inesperado: {e}")


# ZONA DE PRUEBAS
if __name__ == "__main__":
    
    # Caso 1: Operación correcta
    print("Prueba 1 (Correcta): '10 / 2'")
    procesar_operacion("10 / 2")
    print("")

    # Caso 2: División por cero
    print("Prueba 2 (División por 0): '5 / 0'")
    procesar_operacion("5 / 0")
    print("")

    # Caso 3: Valor no numérico
    print("Prueba 3 (Letras en vez de números): 'diez / 2'")
    procesar_operacion("diez / 2")
    print("")

    # Caso 4: Operador desconocido (Excepción personalizada)
    print("Prueba 4 (Operador inválido): '10 % 2'")
    procesar_operacion("10 % 2")
    print("")
    
    # Caso 5: Formato incorrecto
    print("Prueba 5 (Sin espacios): '10+2'")
    procesar_operacion("10+2")