# 1. Definimos la clase base para los libros físicos
class Libro:
    def __init__(self, titulo, autor, anio):
        # Aquí inicializamos los datos básicos del libro
        self.titulo = titulo
        self.autor = autor
        self.anio = anio
        self.disponible = True  # Por defecto, cuando compramos el libro, está disponible

    def prestar(self):
        # Primero revisamos si está en la estantería
        if self.disponible:
            self.disponible = False  # Lo marcamos como prestado (ya no está)
            print(f"Exito: Has prestado el libro físico '{self.titulo}'.")
        else:
            print(f"Error: El libro '{self.titulo}' ya está prestado. Toca esperar.")

    def devolver(self):
        self.disponible = True  # Lo devolvemos a la estantería
        print(f"El libro '{self.titulo}' ha sido devuelto y está disponible de nuevo.")

    def __str__(self):
        # Esto es para que al imprimir el objeto se vea ordenado
        estado = "Disponible" if self.disponible else "Prestado"
        return f"[Físico] {self.titulo} ({self.autor}) - Estado: {estado}"


# 2. Creamos la clase para libros digitales que hereda de Libro
class LibroDigital(Libro):
    def __init__(self, titulo, autor, anio, formato, tamanioMB):
        # Usamos super() para aprovechar el constructor de la clase padre (Libro)
        super().__init__(titulo, autor, anio)
        self.formato = formato
        self.tamanioMB = tamanioMB

    # 3. Sobrescribimos el método prestar
    def prestar(self):
        # En digital, no importa si alguien más lo tiene, se puede descargar infinitas veces
        # Por eso NUNCA cambiamos self.disponible a False aquí.
        print(f"Descargando copia digital de '{self.titulo}' (Formato: {self.formato}, {self.tamanioMB}MB)... Listo!")

    def __str__(self):
        return f"[Digital] {self.titulo} ({self.autor}) - Formato: {self.formato}"


# 4. Clase Biblioteca para administrar todo
class Biblioteca:
    def __init__(self):
        self.libros = []  # Empezamos con la biblioteca vacía

    def agregar_libro(self, libro):
        self.libros.append(libro)
        # No imprimimos nada aquí para no ensuciar la consola, pero ya está guardado

    def listar_libros(self):
        print("\nCATALOGO DE LA BIBLIOTECA")
        if not self.libros:
            print("La biblioteca está vacía. ¡Agrega libros!")
        else:
            for libro in self.libros:
                print(libro)
        print("") # Espacio en blanco al final para separar

    def buscar_por_autor(self, autor_buscado):
        print(f"\nBuscando libros de: {autor_buscado}...")
        encontrados = False
        for libro in self.libros:
            # Usamos lower() para que no importe si escribes en mayúsculas o minúsculas
            if autor_buscado.lower() in libro.autor.lower():
                print(f"   -> Encontrado: {libro.titulo}")
                encontrados = True
        
        if not encontrados:
            print("   -> No tenemos nada de ese autor.")

    def prestar_libro(self, titulo_buscado):
        print(f"\nIntentando prestar: '{titulo_buscado}'...")
        for libro in self.libros:
            if libro.titulo.lower() == titulo_buscado.lower():
                libro.prestar()  # Aquí actúa el polimorfismo (si es físico o digital se comporta distinto)
                return  # Terminamos porque ya encontramos el libro
        
        print(f"No encontramos ningún libro llamado '{titulo_buscado}'.")


# ZONA DE PRUEBAS
if __name__ == "__main__":
    # Creamos la biblioteca
    mi_biblioteca = Biblioteca()

    # 1. Creamos 3 libros físicos
    l1 = Libro("Cien años de soledad", "Gabriel García Márquez", 1967)
    l2 = Libro("1984", "George Orwell", 1949)
    l3 = Libro("El Principito", "Antoine de Saint-Exupéry", 1943)

    # 2. Creamos 2 libros digitales
    d1 = LibroDigital("Aprende Python", "Guido van Rossum", 2023, "PDF", 5.4)
    d2 = LibroDigital("Clean Code", "Robert C. Martin", 2008, "EPUB", 2.1)

    # Agregamos todo a la biblioteca
    mi_biblioteca.agregar_libro(l1)
    mi_biblioteca.agregar_libro(l2)
    mi_biblioteca.agregar_libro(l3)
    mi_biblioteca.agregar_libro(d1)
    mi_biblioteca.agregar_libro(d2)

    # PRUEBA 1: Listar todos los libros
    mi_biblioteca.listar_libros()

    # PRUEBA 2: Prestar un libro físico
    mi_biblioteca.prestar_libro("1984")

    # PRUEBA 3: Intentar prestar el MISMO libro físico otra vez (debe fallar)
    mi_biblioteca.prestar_libro("1984")

    # PRUEBA 4: Prestar un libro digital muchas veces (debe funcionar siempre)
    # Lo hacemos en un bucle pequeño para simular 5 descargas
    print("\nSimulando descargas múltiples")
    for i in range(5):
        mi_biblioteca.prestar_libro("Aprende Python")

    # PRUEBA 5: Buscar libros por autor
    mi_biblioteca.buscar_por_autor("García Márquez")
    mi_biblioteca.buscar_por_autor("J.K. Rowling") # Este no existe

    # Verificamos el estado final
    mi_biblioteca.listar_libros()