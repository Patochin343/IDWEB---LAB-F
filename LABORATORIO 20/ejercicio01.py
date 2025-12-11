salario_base = float(input("Ingrese su salario base: "))
horas_extras = float(input("Ingrese sus horas extras: "))
pago_hora_extra = float(input("Pago por hora extra: "))
bono = float(input("Ingrese el bono: "))
afp = float(input("Ingrese porcentaje AFP (%): "))
salud = float(input("Ingrese el porcentaje de salud (%): "))

salario_bruto = salario_base + (horas_extras * pago_hora_extra) + bono
descuento_afp = salario_base * (afp / 100)
descuento_salud = salario_base * (salud / 100)
descuentos_totales = descuento_afp + descuento_salud

salario_neto = salario_bruto - descuentos_totales

# Resultados
print("\nRESULTADOS")
print(f"Salario bruto: S/ {salario_bruto:.2f}")
print(f"Descuentos totales: S/ {descuentos_totales:.2f}")
print(f" - AFP: S/ {descuento_afp:.2f}")
print(f" - Salud: S/ {descuento_salud:.2f}")
print(f"Salario neto a recibir: S/ {salario_neto:.2f}")