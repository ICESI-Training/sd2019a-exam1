# Defines our Vagrant environment

#

# -*- mode: ruby -*-

# vi: set ft=ruby :


Vagrant.configure("2") do |config|


  # create load balancer

  config.vm.define :lb do |lb_config|
      lb_config.vm.box = "centos_7"
      lb_config.vm.hostname = "lb"
      lb_config.vm.network :private_network, ip: "10.0.15.11"
      lb_config.vm.network "forwarded_port", guest: 80, host: 8085
      lb_config.vm.provider "virtualbox" do |vb|
        vb.memory = "256"
      end
#lb_config.vm.provision "shell",path: "keys.sh"


  end

  # create some web servers

  config.vm.define :web1 do |w1_conf|
        w1_conf.vm.box = "centos_7"
        w1_conf.vm.hostname = "web1"
        w1_conf.vm.network :private_network, ip: "10.0.15.21"
        w1_conf.vm.network "forwarded_port", guest: 80, host: "8086"
        w1_conf.vm.provider "virtualbox" do |vb|
          vb.memory = "256"
       
 end
#w1_conf.vm.provision "shell",path: "keys.sh"    
  end

 config.vm.define :web2 do |w2_conf|
        w2_conf.vm.box = "centos_7"
        w2_conf.vm.hostname = "web2"
        w2_conf.vm.network :private_network, ip: "10.0.15.22"
        w2_conf.vm.network "forwarded_port", guest: 80, host: "8087"
        w2_conf.vm.provider "virtualbox" do |vb|
          vb.memory = "256"
 #w2_conf.vm.provision "shell",path: "keys.sh"       
    end
  end


config.vm.define :db do |db_conf|
        db_conf.vm.box = "centos_7"
        db_conf.vm.hostname = "db"
        db_conf.vm.network :private_network, ip: "10.0.15.23"
        db_conf.vm.network "forwarded_port", guest: 80, host: "8088"
        db_conf.vm.provider "virtualbox" do |vb|
          vb.memory = "256"
 #db_conf.vm.provision "shell",path: "keys.sh"       
    end
  end





config.vm.provision "ansible" do |ansible|
    ansible.playbook = "playbook.yaml"
  end

end
