def generar_espiral(n):
    matriz = [[0] * n for _ in range(n)]
    izquierda = 0
    derecha = n - 1
    arriba = 0
    abajo = n - 1
    numero = 1

    while izquierda <= derecha and arriba <= abajo:
        for col in range(izquierda, derecha + 1):
            matriz[arriba][col] = numero
            numero += 1
        arriba += 1

        for fila in range(arriba, abajo + 1):
            matriz[fila][derecha] = numero
            numero += 1
        derecha -= 1

        if arriba <= abajo:
            for col in range(derecha, izquierda - 1, -1):
                matriz[abajo][col] = numero
                numero += 1
            abajo -= 1

        if izquierda <= derecha:
            for fila in range(abajo, arriba - 1, -1):
                matriz[fila][izquierda] = numero
                numero += 1
            izquierda += 1

    return matriz


while True:
    print("\nMATRIZ EN ESPIRAL HORARIA")

    while True:
        entrada = input("Ingresa un número N mayor o igual a 3: ")
        if entrada.isdigit():
            N = int(entrada)
            if N >= 3:
                break
        print("Debe ser un número mayor o igual a 3.")

    matriz = generar_espiral(N)

    print("\nMatriz en espiral:")
    for fila in matriz:
        print(" ".join(f"{num:3d}" for num in fila))

    op = input("\n¿Deseas generar otra matriz? (s/n): ").lower()
    if op != "s":
        print("Programa finalizado.")
        break
