# Examen 1 Sistemas distribuidos

 **Integrantes:** Daniel Perez Garcia, Miguel Andres Isaza, Steven Montealegre

 **Códigos:** A00018200,

 **Emails:** daniel.perez1@correo.icesi.edu.co

 **Curso:** Sistemas Distribuidos

 **Tema:**  Automatización de Infraestructura con Vagrant y Ansible

 **Docente:** Daniel Barragán
 
 
 
 Problemas
 tuvimos problemas en aspectos como:
 
 la definicion de la ejecucion de los playbooks dentro del vagrantfile para solo un equipo cuando los demas del grupo no habian sido creados, cosa que solucionamos usando el atributo limit=ip del nodo
 
 la configuracion de ciertos aspectos del servidor de base de datos, esto lo solucionamos con las instrucciones command de ansible, a traves de las cuales pudimos ejecutar ciertos comandos necesarios
 
 la integracion con python para el backend, tuvimos algunos problemas de librerias que silucionamos instalando pip en los nodos y usando el comando directamente a traves de ansible
 
 los permisos de acceso a la base de datos, que estaban siendo limitados por selinux, cosa que corregimos cambiando uno de sus valores booleanos mediante la linea de comandos.
 
el acceso remoto a los nodos, pues ssh no nos permitia hacerlo directamente con el usuario root mediante sudo. esto lo solucionamos automatizando el traspaso de una llave ssh que generamos con ssh-keygen -t rsa, esta misma luego la transerimos de forma automatica para cada nodo dentro del vagrantfile con la instruccion shell que vagrant trae.
