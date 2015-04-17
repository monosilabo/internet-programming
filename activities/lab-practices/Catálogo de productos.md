# Catálogo de productos

En esta actividad crearemos una aplicación y un servicio web para administrar un catálogo de productos. A diferencia de las implementaciones anteriores, la aplicación web interactuará *asíncronamente* con el servidor;  basta de recargas de recursos innecesarias, actualizaremos solo los datos que mutan.

Dividamos el proyecto en dos secciones, Cliente y Servidor. El Cliente intercambiará información con el servidor via AJAX. Para simplificar tu trabajo puedes reutilizar lo visto en el ejercicio [AJAX](../exercises/ajax).

## Servidor

El servidor ofrecerá tres *endpoints*, mediante los cuales el cliente realizará peticiones HTTP:

1. `GET /products/`: Devuelve los últimos `n` productos. `n` es el número de elementos que devolverás por página, puede ser el número entero que desees, 10, 5, 100. El único requerimiento es que `n` tiene que ser constante.
2. `GET /products/{page}`. Devuelve los `n` productos de la página que solicitas. Si solicitas la página 2, `n` es igual a 10 y el sistema almacena 15 productos, el servicio devolverá 5 productos.
3. `POST /products/`. Envía un producto al servidor.

## Cliente

La aplicación web vivirá en solo un archivo HTML. A este archivo añadirás:

1. Un formulario, con dos campos para crear un producto nuevo, Nombre y Precio, y un botón que al presionarlo enviará una solicitud al servidor para crear el producto.
2. Una tabla con dos columnas que describan las propiedades de los productos que existen en el catálogo. Pagina la tabla y muestra botones para navegar a través del catálogo.
3. Al cargar la página llenarás la tabla con los últimos `n` productos añadidos
