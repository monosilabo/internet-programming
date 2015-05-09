# Movimiento y proximidad de coches

Analiza los datos del documento [Carts](https://docs.google.com/spreadsheets/d/1MRs0L47QF37iyaPn27qOTinVBSEConJxNf_uHogoOBk/edit#gid=0) y reconstruye en `<canvas>` el movimiento de los coches. Toma en consideración los siguientes criterios:

## Sobre los objetos

El documento contiene las *posiciones iniciales* de los objetos y la *velocidad* de cada uno de ellos a lo largo del tiempo.

## Sobre el movimiento

Durante 15 segundos, anima el movimiento de los objetos según:

1. Representa cada coche con un círculo y un color diferente
2. Además de cambiar la posición de los coches según la velocidad descrita por los componentes Vx y Vy de su vector, dibuja su vector velocidad por cada cuadro, tomando como base del vector el centro del coche
3. Cada segundo calcula e imprime en una tabla el nombre del coche más próximo a Parked Cart

