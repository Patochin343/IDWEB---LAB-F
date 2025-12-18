import math as match

class figura:
    def area(self):
        pass

    def perimetro(self):
        pass

class cuadrado(figura):
    def __init__(self, lado):
        self.lado = lado

    def area(self):
        return self.lado * self.lado

    def perimetro(self):
        return 4 * self.lado
    
class circulo(figura):
    def __init__(self, radio):
        self.radio = radio

    def area(self):
        return 3.1416 * self.radio * self.radio

    def perimetro(self):
        return 2 * 3.1416 * self.radio
    
class triangulo(figura):
    def __init__(self, lado1, lado2,  lado3, angulo):
        self.lado1 = lado1
        self.lado2 = lado2
        self.lado3 = lado3
        self.angulo = angulo

    #Usando la formula de area = (a*b*sin(angulo))/2
    def area(self):
        return (self.lado1 * self.lado2 * match.sin(self.angulo)) / 2

    def perimetro(self):
        return self.lado1 + self.lado2 + self.lado3
    
# ZONA DE PRUEBAS
cuadrado1 = cuadrado(5)
print("Cuadrado - Area:", cuadrado1.area())
print("Cuadrado - Perimetro:", cuadrado1.perimetro())

circulo1 = circulo(3)
print("Circulo - Area:", circulo1.area())
print("Circulo - Perimetro:", circulo1.perimetro())

triangulo1 = triangulo(3, 4, 5, match.radians(90))
print("Triangulo - Area:", triangulo1.area())
print("Triangulo - Perimetro:", triangulo1.perimetro())
        