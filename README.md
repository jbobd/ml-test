# Test de mercadolibre

Esta es la app para el el coding challenge de Mercado Libre. 

Para realizarla utilicé el siguiente stack:

*Cliente:*
* js 
* React
* sass

*Servidor:*
* Node
* Express

Para poder ejecutarlo, realizar lo siguiente:

# Instalación

Clonar el repositorio y luego realizar lo siguiente:

## server

``` 
cd client 
npm install 
npm run dev 
 ```

## server

``` 
cd server
npm install
npm start 
```

La aplicación ya debería estar corriendo en http://localhost:3000/

## Explicación

- Contiene dos componentes principales, el navbar que siempre se muestra, y el pageContent, que renderiza ,matcheando por url, el componente de resultados de búsqueda o el de detalle de producto.

- Al enviar un input en el searchbar, hago una búsqueda en mi endpoint /items/q , guardo el resultado en el state y seteo mi path location en /items/q. El componente pageContent mostrará entonces la vista de resultados de búsqueda con el resultado obtenido

- Cada uno de estos resultados tendrá un link a /items/{id}, al clickearse la imagen o el título, seteo el path location en /items/{id}, y pageContent renderizará la vista de detalle de producto.

- Al montarse el componente de detalle de producto, toma el id desde el path location, y llama a mi endpoint /items para obtener los datos del mismo.

##Consideraciones:

- Toda la funcionalidad descrita funciona correctamente; Excepto en el caso de realizar una nueva búsqueda desde la vista de detalle de producto. Como workaround, para poder hacer una nueva búsqueda, es necesario volver al home. De momento no he podido aún solucionarlo. Considero que tengo alguna falla en el manejo del lifecycle method del ProductDetail.
- Ciertas reglas de sass se podrían haber obviado mediante el uso de variables, por temas de tiempos  no pude hacer emprolijar esta parte.
