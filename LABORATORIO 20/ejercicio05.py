def registrar_estudiante (lista):
    nombre = input("Ingresa nombre: ")
    edad = int(input("Edad: "))
    promedio = float(input("Promedio: "))

    estudiante = {
        "nombre": nombre,
        "edad": edad,
        "promedio": promedio
    }

    lista.append(estudiante)
    print("Estudiante agregado correctamente.\n")

def mostrar_estudiante (lista):
    if len(lista) == 0:
        print("No hay estudiantes registrados.\n")
        return
    
    print("MOSTRAR ESTUDIANTES")
    for e in lista:
        print(f"Nombre: {e['nombre']}, Edad: {e['edad']}, Promedio: {e['promedio']}")
    print()

def estudiante_mejor_promedio (lista):
    if len(lista) == 0:
        print("No hay estudiantes registrados.\n")
        return
    
    mejor = lista[0]
    for e in lista:
        if e["promedio"] > mejor["promedio"]:
            mejor = e
    
    print("Estudiante con mejor promedio")
    print(f"Nombre: {mejor['nombre']}, Edad: {mejor['edad']}, Promedio: {mejor['promedio']}\n")

def buscar_nombre (lista):
    print("BUSCAR ESTUDIANTE")
    nombre = input("Nombre del estudiante: ")

    for e in lista:
        if e["nombre"].lower() == nombre.lower():
            print(f"Encontrado: {e['nombre']}, Edad: {e['edad']}, Promedio: {e['promedio']}\n")
            return
    
    print("No se encontró estudiante.\n")

def eliminar_nombre (lista):
    print("ELIMINAR ESTUDIANTE")
    nombre = input("Nombre del estudiante: ")
    
    for e in lista:
        if e["nombre"].lower() == nombre.lower():
            lista.remove(e)
            print("Estudiante eliminado.\n")
            return
    
    print("No se encontró estudiante.\n")


# MENÚ

lista = [] 

while True:
    print("MENÚ")
    print("1. Agregar estudiante")
    print("2. Mostrar estudiantes")
    print("3. Mostrar estudiante con mejor promedio")
    print("4. Buscar por nombre")
    print("5. Eliminar por nombre")
    print("6. Salir")

    opcion = input("Opción: ")

    if opcion == "1":
        registrar_estudiante(lista)
    elif opcion == "2":
        mostrar_estudiante(lista)
    elif opcion == "3":
        estudiante_mejor_promedio(lista)
    elif opcion == "4":
        buscar_nombre(lista)
    elif opcion == "5":
        eliminar_nombre(lista)
    elif opcion == "6":
        print("Saliendo del programa...")
        break
    else:
        print("Opción inválida.\n")
