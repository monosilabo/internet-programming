# Formularios de captura

Harto de matar inocentes árboles al capturar en papel los datos de tus clientes y los productos que vendes, decides crear formularios para migrar la información a formato digital. Tras analizar la pila de documentos que has almacenado llegas a la conclusión de que para mejorar el proceso de captura debes cumplir ciertos requerimientos.

## Datos que identificaste

### Cliente

Cada cliente cuenta con:

#### Cuenta

1. Nombre de usuario. Aplica las reglas de validación del nombre de usuario en Twitter
2. Contraseña

#### Perfil

1. Nombre
2. Género
3. Fecha de nacimiento. Día, mes y año
4. Estado de residencia. Limita este campo a los estados de México
5. Sitio web (blog, sitio web personal, perfil de twitter)

#### Contacto

1. Correo electrónico
2. Teléfono

### Producto

De los productos te interesa almacenar:

1. Nombre. Máximo 100 caracteres
2. Descripción. Las descripciones suelen ser extensas, considera múltiples párrafos
3. Precio. El precio no debe exceder los $10,000.00
3. Foto del producto
4. Opción para subir múltiples archivos
5. Color del producto
6. Categoría. Sugiere el uso de ciertas categorías pero no limites las opciones. La persona que capture podría añadir una nueva categoría
8. Opción para marcar que el producto está disponible. Simple, o está disponible o no
9. SKU. Clave del producto, valida que la clave tenga de 3 a 4 letras, un guión, 5 números y 2 letras, por ejemplo: ABC-12345XZ

Divide está información en dos páginas, incluye en una el formulario de Cliente y en la otra el formulario de Producto. Los formularios deben apuntar a http://education.affenbits.com/form.php, al terminar de construir el formulario prueba que los datos lleguen al servidor. Ten en consideración que los datos se envían en un formato por defecto, [elige](http://www.w3.org/TR/html5/forms.html#attr-fs-enctype) donde lo requiera el más adecuado para transferir archivos. La respuesta del servidor será similar a:

```html
<h1>Data</h1>
<pre>
Array
(
    [name] => AC
)
Array
(
    [photo] => Array
        (
            [name] => B9kpWEuCQAI2IB6.png
            [type] => image/png
            [tmp_name] => /private/var/tmp/php8W9gEi
            [error] => 0
            [size] => 142068
        )

)
</pre>
```

## Requerimientos generales

Aplica los siguientes criterios a ambos formularios.

1. Elige el control HTML más adecuado para cada dato
2. Acompaña cada control con una etiqueta que contenga el nombre del campo
3. Inserta ejemplos en los campos donde sea pertinente. Por ejemplo, podrías poner dentro de un campo de nombre: "José Vasconcelos"
4. Enfoca el primer campo de cada formulario
5. Agrupa los campos según lo indique el apartado de cada formulario y muestra el título del grupo usando el elemento apropiado. Por ejemplo, en el formulario del cliente tendrás tres grupos de campos
6. Activa la validación en el cliente
