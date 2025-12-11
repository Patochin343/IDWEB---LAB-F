def ingresos_tasas(numSuperior):
    tasa = 0  

    if numSuperior <= 20000:
        print(f"[0 – {numSuperior}] -> 0% = 0")
        return 0
    
    elif 20000 < numSuperior <= 50000:
        tramo = numSuperior - 20000
        tasa = tramo * 0.10
        print(f"<20000 – {numSuperior}] -> {tramo} x 10% = {tasa}")
        return tasa

    elif 50000 < numSuperior <= 100000:
        tasa1 = 30000 * 0.10
        print("<20000 – 50000] -> 30000 x 10% =", tasa1)

        tramo = numSuperior - 50000
        tasa2 = tramo * 0.20
        print(f"<50000 – {numSuperior}] -> {tramo} x 20% = {tasa2}")

        tasa = tasa1 + tasa2
        return tasa

    else:
        tasa1 = 30000 * 0.10
        print("<20000 – 50000] -> 30000 x 10% =", tasa1)

        tasa2 = 50000 * 0.20
        print("<50000 – 100000] -> 50000 x 20% =", tasa2)

        tramo = numSuperior - 100000
        tasa3 = tramo * 0.30
        print(f"<100000 – {numSuperior}] -> {tramo} x 30% = {tasa3}")

        tasa = tasa1 + tasa2 + tasa3
        return tasa


# PROGRAMA ITERATIVO

while True:
    print("\nCALCULADORA DE IMPUESTOS PROGRESIVOS")

    ingreso_mensual = float(input("Ingrese el ingreso mensual: "))
    ingreso_anual = ingreso_mensual * 14  #pago como 14

    print(f"\nIngreso anual: {ingreso_anual}")

    print("\nImpuesto por tramos")
    impuesto_total = ingresos_tasas(ingreso_anual)

    # tasa efectiva
    tasa_efectiva = (impuesto_total / ingreso_anual) * 100

    print("\nRESULTADOS")
    print("Total impuesto:", impuesto_total)
    print(f"Tasa efectiva real: {tasa_efectiva:.2f}%")

    # repetir
    op = input("\n¿Desea calcular otro? (s/n): ").lower()
    if op != "s":
        print("Programa finalizado.")
        break
