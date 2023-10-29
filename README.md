# Backend-Practicas-3

Práctica 3 de Arquitectura y Programación de Sistemas en Internet

API Discos de Música

En esta practica consiste en crear una API que nos permita el almacenamiento y gestión de información de discos de música de manera local, donde se incluye los datos como el nombre, autor, formato, matriz, país de impresión, arte de portada y ID.

Endpoints 
GET
Obtener todos los discos existentes

Devuelve una lista de todos los discos de música almacenados.

URL: /mostrar

Obtener un disco por ID

Devuelve la información detallada de un disco específico identificado por su ID.

URL: /mostrar/id/{id}


POST
Crear un nuevo disco

Permite agregar un nuevo disco con la información proporcionada en el cuerpo.

URL: /discos/{nombre}/{autor}/{formato}/{matriz}/{pais}/{artePortada}/{id}


PUT
Actualizar un disco existente por ID

Permite actualizar la información de un disco existente identificado por su ID. Los datos actualizados se envían en el cuerpo de la solicitud.

URL: /modificar/id/{id}

Ejemplo del cuerpo de la solicitud (en formato JSON):

{
  "nombre": "",
  "autor": "",
  "formato": "",
  "matriz": "",
  "pais": "",
  "artePortada": "",
  "id": ""
}


DELETE
Eliminar un disco por ID

Permite eliminar un disco por su ID.

URL: /borrar/id/{id}
