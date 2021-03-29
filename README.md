
Esta prueba técnica consiste en la implementación de una aplicación web serverless desarrollada con Angular 10 cuyos servicios de back end , base de datos y hosting provee Firebase.

Consiste en los siguiente módulos, siguiendo la recomendación de hacer una implementación orientada a objetos:

1. Tienda de artículos : Permite visualizar el detalle de los artículos disponibles en inventario y realizar la compra.
2. Gestión de inventarios : Permite ingresar inventario, modificar inventario existente, eliminar inventario, consultar el inventario.

Las operaciones CRUD tienen un efecto inmediato en la interfaz de usuario ya que se aplican principios de programación reactiva y Firebase provee webSockets que mantienen actualizada la información con la base de datos.

# Requisitos de instalación

Importante instalar la última versión de Node, Angular CLI.

# Instalar Angular CLI

    npm install -g @angular/cli 

# Instalar este repositorio

Correr el siguiente comando para instalar todas las dependencias

    npm install 

Para una correcta implementación, las librerias en el package.json deben cumplir con las siguientes condiciones de versionamiento.

Angular	Firebase	AngularFire
10	       8	       ^6.0.4
