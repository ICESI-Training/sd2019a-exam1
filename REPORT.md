# Examen 1
## Universidad Icesi
###### Materia: Sistemas Distribuidos
###### Profesor: Daniel Barragán C.
###### Tema: Infrastructure Automation
###### Estudiantes: Daniel Pérez, Steven Montealegre, Miguel Isaza
###### Códigos: A00018200, A00014976, A00054628

## Tecnologías utilizadas
* Vagrant
* Ansible
* Centos7
* Repositorio GitHub

### Descripción de la infraestructura
Para este examen, vamos a desplegar una plataforma que permita realizar consultas a una base de datos desde una aplicación web. El usuario hace una petición al balanceador de carga y este debe redireccionarlas a los servidores web 1 y 2, a través de la página el usuario debe poder realizar consultas a una única base de datos.

La creación y configuración de cada servidor se debe hacer con la herramienta Ansible de forma remota sobre las máquinas virtuales ya desplegadas con vagrant.


## 3. Base de datos 
 Para la base de datos creamos una estructura de carpetas, primero se creó un archivo inicial llamado postgresql_playbooks.yml 
 
 ![](/images/db1.PNG) 
 **Figura 1 - playbook postgresql**
 
 se especifíca el grupo de host que se creó previamente, 
 
 
## 7. Problemas
 tuvimos problemas en aspectos como:
 
 la definicion de la ejecucion de los playbooks dentro del vagrantfile para solo un equipo cuando los demas del grupo no habian sido creados, cosa que solucionamos usando el atributo limit=ip del nodo
 
 la configuracion de ciertos aspectos del servidor de base de datos, esto lo solucionamos con las instrucciones command de ansible, a traves de las cuales pudimos ejecutar ciertos comandos necesarios
 
 la integracion con python para el backend, tuvimos algunos problemas de librerias que silucionamos instalando pip en los nodos y usando el comando directamente a traves de ansible
 
 los permisos de acceso a la base de datos, que estaban siendo limitados por selinux, cosa que corregimos cambiando uno de sus valores booleanos mediante la linea de comandos.
 
el acceso remoto a los nodos, pues ssh no nos permitia hacerlo directamente con el usuario root mediante sudo. esto lo solucionamos automatizando el traspaso de una llave ssh que generamos con ssh-keygen -t rsa, esta misma luego la transerimos de forma automatica para cada nodo dentro del vagrantfile con la instruccion shell que vagrant trae.
