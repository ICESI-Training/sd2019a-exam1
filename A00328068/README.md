# Parcial 1

### **Nombres:** Edisson guerrero, Julián Niño, Jhonatan Arias 
### **Códigos**  A00328068,A00328080,A00315328
### **Curso:** Sistemas Distribuidos


# Descripción
aquí se encuentra el desarrollo del parcial 1 del curso sistemas distribuidos, para el desarrollo de este se utilizaron 4 maquinas virtuales, creadas con la herramienta vagrant, y aprovisionadas con la herramienta ansible

# roles
cada una de las maquinas tienes un rol diferente
1) la primera maquina llamada lb tiene el papel de ser el balanceador de carga para los diferentes servidores web
2) las otras dos maquinas llamadas web1 y web2 respectivamente tienen el rol de servir el servicio web y ademas hacer consultas a un servidor de base de datos
3) la ultima maquina llamada db tiene el rol de servir el servicio de base de datos

# running
para poder correr tanto la creacion de las maquinas virtuales como su respectivo aprovisionamiento se necesita principalmente de dos cosas:

1) tener instalado en tu maquina real vagrant y ansible, esto se hace utilizando los comandos
sudo apt-add-repository ppa:ansible/ansible
sudo apt-get update -y
sudo apt-get install ansible -y
sudo ansible --version
y para la instalacion del vagrant 
udo apt install vagrant

2) una vez hecho esto necesitamos crear una box en vagrant con el siguiente comando
vagrant box add centos_7 /home/usuario/centos_7.iso

3) luego de esto debemos asegurarnos que los nombres de las maquinas en el Vagrantfile y los diferentes hosts en el archivo 
sudo nano /etc/ansible/hosts
coincidan dado que el ansible debe saber a quien va a aprovisionar.
 la sintagsis dentro de este archivo es:
 
 [grupo al cual la maquina pertenece]
"name de la maquina" ansible_ssh_host="ip.de.la.maquina"

en este repositorio se encuentra una copia del archivo hosts si hay problema
solo hay que reemplasarlo y es todo

4) despues que tenemos todo instalado podemos proceder a dar Vagrant up y toda las maquinas se crearan y se aprovisionaran

![][1]


# problemas
cuando damos vagrant up todo funciona perfectamente, pero tuvimos un pequeño error que se nos fue imposible corregir, fue la conexion entre la base de datos y los 
diferentes web servers. Intentamos con varias herramientas tales como php, nodejs, pero debido a diferentes dependencias y a la falta de tiempo 
no pudimos realizar esta funcionalidad.Apesar que la maquina db tiene la base de datos, por el momento no se accede a ella

# como luce 
al final vemos como el load balancer permite por una unica ip acceder a los dos servidores web sin problema.

![][2]
![][3]






[1]:images/1.png
[2]:images/2.png
[3]:images/3.png



