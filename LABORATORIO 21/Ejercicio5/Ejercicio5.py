import os

# Funcion 1: Para copiar archivos de texto (.txt, .py, .csv)
def copiar_texto(ruta_origen, ruta_destino):
    try:
        # 1. Abrimos el archivo original en modo lectura de texto ('r')
        # Usamos 'utf-8' para que reconozca tildes y caracteres especiales
        with open(ruta_origen, 'r', encoding='utf-8') as archivo_lectura:
            contenido = archivo_lectura.read()

        # 2. Abrimos (o creamos) el archivo destino en modo escritura de texto ('w')
        # Si el archivo ya existe, esto borrara su contenido anterior
        with open(ruta_destino, 'w', encoding='utf-8') as archivo_escritura:
            archivo_escritura.write(contenido)
        
        print(f"Exito: Se copio el texto de '{ruta_origen}' a '{ruta_destino}'")

    except FileNotFoundError:
        print(f"Error: No pudimos encontrar el archivo '{ruta_origen}'")
    except Exception as e:
        print(f"Ocurrio un error inesperado copiando texto: {e}")


# Funcion 2: Para copiar archivos binarios (imagenes, audios, pdf, ejecutables)
def copiar_binario(ruta_origen, ruta_destino):
    try:
        # 1. Abrimos el original en modo lectura BINARIA ('rb')
        # La 'b' es clave aqui para que Python no intente interpretar letras
        with open(ruta_origen, 'rb') as archivo_lectura:
            datos_bytes = archivo_lectura.read()

        # 2. Abrimos el destino en modo escritura BINARIA ('wb')
        with open(ruta_destino, 'wb') as archivo_escritura:
            archivo_escritura.write(datos_bytes)

        print(f"Exito: Se clono el archivo binario '{ruta_origen}' a '{ruta_destino}'")

    except FileNotFoundError:
        print(f"Error: No existe el archivo '{ruta_origen}' para copiarlo")
    except Exception as e:
        print(f"Ocurrio un error copiando binario: {e}")


# ZONA DE PRUEBAS
if __name__ == "__main__":
    
    # 1. OBTIENE LA RUTA DE LA CARPETA DONDE ESTÁ ESTE SCRIPT
    # __file__ es el archivo actual. dirname obtiene su carpeta.
    directorio = os.path.dirname(os.path.abspath(__file__))
    
    print(f"--> El script está en: {directorio}")

    # 2. CONSTRUYE LAS RUTAS AUTOMÁTICAMENTE
    # os.path.join se encarga de poner las barras (/) correctamente
    ruta_txt_origen = os.path.join(directorio, "nota_original.txt")
    ruta_txt_destino = os.path.join(directorio, "nota_copia.txt")

    ruta_img_origen = os.path.join(directorio, "img1.jpg")
    ruta_img_destino = os.path.join(directorio, "img1_copia.jpg")

    # PRUEBA DE TEXTO
    print("\nPrueba 1: Copiando archivo de texto...")
    copiar_texto(ruta_txt_origen, ruta_txt_destino)

    # PRUEBA DE BINARIO
    print("\nPrueba 2: Copiando archivo binario...")
    copiar_binario(ruta_img_origen, ruta_img_destino)