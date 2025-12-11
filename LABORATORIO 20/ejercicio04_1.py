import math

def normalizar(lista, modo):
    modo = modo.lower()

    datos = lista[:]  

    if modo == "minmax":
        minimo = datos[0]
        for x in datos:
            if x < minimo:
                minimo = x

        maximo = datos[0]
        for x in datos:
            if x > maximo:
                maximo = x

        rango = maximo - minimo

        if rango == 0:
            return [0 for _ in datos]

        resultado = []
        for x in datos:
            nuevo = (x - minimo) / rango
            resultado.append(nuevo)

        return resultado


    elif modo == "zscore":
        suma = 0
        for x in datos:
            suma += x

        media = suma / len(datos)

        sumatoria = 0
        for x in datos:
            sumatoria += (x - media)**2

        varianza = sumatoria / len(datos)
        desviacion = math.sqrt(varianza)

        if desviacion == 0:
            return [0 for _ in datos]

        resultado = []
        for x in datos:
            nuevo = (x - media) / desviacion
            resultado.append(nuevo)

        return resultado


    elif modo == "unit":

        suma_cuadrados = 0
        for x in datos:
            suma_cuadrados += x**2

        norma = math.sqrt(suma_cuadrados)

        if norma == 0:
            return [0 for _ in datos]

        resultado = []
        for x in datos:
            nuevo = x / norma
            resultado.append(nuevo)

        return resultado

    else:
        print("Modo no válido. Usa: minmax, zscore o unit.")
        return None



tamaño = int(input("Tamaño de la lista: "))

lista = []
for i in range(tamaño):
    num = float(input(f"Número {i+1}: "))
    lista.append(num)

opcion = input("Ingresa (minmax, zscore, unit): ")

resultado = normalizar(lista, opcion)

print("\nLista original:", lista)
print("Resultado:", resultado)
