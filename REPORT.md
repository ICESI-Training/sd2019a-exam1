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
Para este examen, vamos a desplegar una plataforma que permita realizar consultas a una base de datos desde una aplicación web. El usuario hace una petición al balanceador de carga y este debe redireccionarlas (dependiendo del tráfico) a los servidores web 1 y 2, a través de la página el usuario debe poder realizar consultas a una única base de datos.

La creación y configuración de cada servidor deberá estar desplegada en **Ansible** de forma remota sobre las máquinas virtuales que se encuentran montadas sobre **Vagrant.**

## 3. Servidor Web
El servidor web que utilizaremos para la práctica será Apache, en el cual haremos las configuraciones habituales.  

## 4. Base de datos 
Para la base de datos haremos uso de una base de datos relacional --Postgresql-- Creamos una estructura de carpetas y un archivo inicial llamado postgresql_playbooks.yml 
 
 ![](/images/db1.PNG)  
 **Figura 1 - playbook postgresql**.  
Se especifíca el grupo de host que se creó previamente. Luego, iniciamos sesión como usuario root mediante become_user; seguido establecemos la carpeta donde se encuentrarán las variables que usaremos para crear la base de datos: nombre de la base de datos, usuario y contraseña.  
 ```ansible
db_user: root
db_name: root
db_password: password
 ```  
 Por último, especificamos la carpeta de roles, aquí van las tareas que se van a ejecutar para poder crear la base de datos.  
 
```ansible
- name: restart postgresql
  service: name=postgresql state=restarted
```  
```ansible
- name: restart postgresql
  service: name=postgresql state=restarted
```- name: Install PostgreSQL
  yum: name={{ item }} update_cache=true state=installed
  with_items:
    - postgresql-server
    - postgresql-contrib
    - python-psycopg2
  tags: packages

- name: initdb
  command: postgresql-setup initdb creates=/var/lib/pgsql/data/pg_hba.conf
  sudo: yes

- name: Ensure the PostgreSQL service is running
  service: name=postgresql state=started enabled=yes

- name: Ensure database is created
  become: yes
  become_user: postgres 
  become_method: sudo
  postgresql_db: name={{ db_name }}
             encoding='UTF-8'
             lc_collate='en_US.UTF-8'
             lc_ctype='en_US.UTF-8'
             template='template0'
             state=present

- name: Ensure user has access to the database
  become: yes
  become_user: postgres 
  become_method: sudo
  postgresql_user: db={{ db_name }}
               name={{ db_user }}
               password={{ db_password }}
               priv=ALL
               state=present

- name: Ensure user does not have unnecessary privileges
  become: yes
  become_user: postgres 
  become_method: sudo
  postgresql_user: name={{ db_user }}
               role_attr_flags=NOSUPERUSER,NOCREATEDB
               state=present

- name: add lines to postgre.conf file
  become: yes
  become_user: postgres
  become_method: sudo
  lineinfile:
    line: "listen_addresses = '*'"
    dest: "/var/lib/pgsql/data/postgresql.conf"

- name: add lines to postgre.conf file
  become: yes
  become_user: postgres
  become_method: sudo
  lineinfile:
    line: "port = 5432"
    dest: "/var/lib/pgsql/data/postgresql.conf"

- name: add lines to pg_hba.conf file
  become: yes
  become_user: postgres
  become_method: sudo
  lineinfile:
    line: "host    all             all             0.0.0.0/0               trust"
    insertbefore: BOF
    dest: "/var/lib/pgsql/data/pg_hba.conf"

- name: reiniciar postgresql 
  service:
    name: postgresql 
    state: restarted
```  
## 5. Integración
Cada integrante del grupo se encargó de una tecnología en específico.
Se crearon 3 ramas en donde cada uno debe  commits de su trabajo y se revisaba lo que estaba haciendo el otro compañero para hacerle comentarios de su trabajo y si debía corregir algún error.


## 7. Problemas
 tuvimos problemas en aspectos como:
 
 - La definicion de la ejecucion de los playbooks dentro del vagrantfile para solo un equipo cuando los demas del grupo no habian sido creados, cosa que solucionamos usando el atributo limit=ip del nodo
 
 - La configuracion de ciertos aspectos del servidor de base de datos, esto lo solucionamos con las instrucciones command de ansible, a traves de las cuales pudimos ejecutar ciertos comandos necesarios
 
 - La integracion con python para el backend, tuvimos algunos problemas de librerias que silucionamos instalando pip en los nodos y usando el comando directamente a traves de ansible
 
 - Los permisos de acceso a la base de datos, que estaban siendo limitados por selinux, cosa que corregimos cambiando uno de sus valores booleanos mediante la linea de comandos.
 
- El acceso remoto a los nodos, pues ssh no nos permitia hacerlo directamente con el usuario root mediante sudo. esto lo solucionamos automatizando el traspaso de una llave ssh que generamos con ssh-keygen -t rsa, esta misma luego la transerimos de forma automatica para cada nodo dentro del vagrantfile con la instruccion shell que vagrant trae.
