import time
import random
import threading
import multiprocessing
import asyncio

# --- CONFIGURACIÓN ---
N_CONSULTAS = 3

# Función simulada (Bloqueante) - Para Hilos y Procesos
def consulta_db_bloqueante(id_consulta):
    espera = random.randint(1, 5)
    print(f"[{id_consulta}] Iniciando consulta... (demorará {espera}s)")
    time.sleep(espera) # Simula el tiempo de espera de la DB
    print(f"[{id_consulta}] Consulta terminada.")

# Función simulada (No bloqueante) - Para Asyncio
async def consulta_db_async(id_consulta):
    espera = random.randint(1, 5)
    print(f"[{id_consulta}] Iniciando consulta... (demorará {espera}s)")
    await asyncio.sleep(espera) # 'await' libera el control mientras espera
    print(f"[{id_consulta}] Consulta terminada.")

# ---------------------------------------------------------
# 1. ENFOQUE CON HILOS (THREADING)
# ---------------------------------------------------------
def correr_hilos():
    print("\n--- INICIANDO CON HILOS (THREADING) ---")
    inicio = time.time()
    
    lista_hilos = []
    
    # Crear y arrancar hilos
    for i in range(N_CONSULTAS):
        hilo = threading.Thread(target=consulta_db_bloqueante, args=(f"Hilo-{i+1}",))
        lista_hilos.append(hilo)
        hilo.start()
    
    # Esperar a que todos terminen
    for hilo in lista_hilos:
        hilo.join()
        
    fin = time.time()
    print(f"TIEMPO TOTAL HILOS: {fin - inicio:.2f} segundos")

# ---------------------------------------------------------
# 2. ENFOQUE CON PROCESOS (MULTIPROCESSING)
# ---------------------------------------------------------
def correr_procesos():
    print("\n--- INICIANDO CON PROCESOS (MULTIPROCESSING) ---")
    inicio = time.time()
    
    lista_procesos = []
    
    # Crear y arrancar procesos
    for i in range(N_CONSULTAS):
        proceso = multiprocessing.Process(target=consulta_db_bloqueante, args=(f"Proc-{i+1}",))
        lista_procesos.append(proceso)
        proceso.start()
    
    # Esperar a que todos terminen
    for proceso in lista_procesos:
        proceso.join()
        
    fin = time.time()
    print(f"TIEMPO TOTAL PROCESOS: {fin - inicio:.2f} segundos")

# ---------------------------------------------------------
# 3. ENFOQUE ASÍNCRONO (ASYNCIO)
# ---------------------------------------------------------
async def correr_asyncio():
    print("\n--- INICIANDO CON ASYNCIO ---")
    inicio = time.time()
    
    # Crear lista de tareas (corutinas)
    tareas = [consulta_db_async(f"Async-{i+1}") for i in range(N_CONSULTAS)]
    
    # Ejecutarlas concurrentemente
    await asyncio.gather(*tareas)
    
    fin = time.time()
    print(f"TIEMPO TOTAL ASYNCIO: {fin - inicio:.2f} segundos")

# ---------------------------------------------------------
# MAIN
# ---------------------------------------------------------
if __name__ == "__main__":
    # Nota: El bloque if __name__ es OBLIGATORIO para multiprocessing en Windows
    
    correr_hilos()
    
    # Ejecutamos la función asíncrona dentro del event loop
    asyncio.run(correr_asyncio())
    
    correr_procesos()