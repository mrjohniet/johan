
# Hulk Store

Esta prueba técnica consiste en la implementación de una aplicación web serverless desarrollada con Angular 10 cuyos servicios de back end , base de datos y hosting provee Firebase. 

Se hizo uso de varios componentes de Angular Material y para asegurar su correcta visualización en otros dispositivos de utilizó Bootstrap y Flex-Box.

Consiste en los siguiente módulos, siguiendo la recomendación de hacer una implementación orientada a objetos:

1. Tienda de artículos : Permite visualizar el detalle de los artículos disponibles en inventario y realizar la compra que afecta las existencias de inventario.
2. Gestión de inventarios : Permite ingresar inventario, modificar inventario existente, eliminar inventario, consultar el inventario.

Las operaciones CRUD tienen un efecto inmediato en la interfaz de usuario ya que se aplican principios de programación reactiva y Firebase provee webSockets que mantienen actualizada la información con la base de datos.

La aplicación se encuentra alojada en https://johan-9cedc.web.app/

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
