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

