# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
 
  config.vm.define "db" do |db|
    db.vm.box = "centos/7"
    db.vm.network "private_network", ip: "192.168.56.5"
    db.vm.provision  "ansible" do |ansible|
      ansible.playbook = 'postgresql_playbook.yml'
      ansible.limit = 'all'
      ansible.inventory_path = 'inventory'
    end
  end
 
  config.vm.define "load_balancer" do |load_balancer|
    load_balancer.vm.box = "centos/7"
    load_balancer.vm.network "private_network", ip: "192.168.56.2"
    load_balancer.vm.provision  "ansible" do |ansible|
      ansible.playbook = 'lbplaybook.yml'
      ansible.inventory_path = 'inventory'
    end

  end

  config.vm.define "web1" do |web1|
    web1.vm.box = "centos/7"
    web1.vm.network "private_network", ip: "192.168.56.3"
    web1.vm.provision  "ansible" do |ansible|
      ansible.playbook = 'webplaybook.yml'
      ansible.limit = '192.168.56.3'
      ansible.inventory_path = 'inventory'
    end

  end

  config.vm.define "web2" do |web2|
    web2.vm.box = "centos/7"
    web2.vm.network "private_network", ip: "192.168.56.4"
    web2.vm.provision  "ansible" do |ansible|
      ansible.playbook = 'webplaybook.yml'
      ansible.limit = '192.168.56.4'
      ansible.inventory_path = 'inventory'
    end

  end


  config.vm.provision "file", source: "/root/.ssh/id_rsa", destination: "/home/vagrant/.ssh/id_rsa"
  public_key = File.read("/root/.ssh/id_rsa.pub")
  config.vm.provision :shell, :inline =>"
      echo 'Copying ansible-vm public SSH Keys to the VM'
      mkdir -p /home/vagrant/.ssh
      chmod 700 /home/vagrant/.ssh
      echo '#{public_key}' >> /home/vagrant/.ssh/authorized_keys
      chmod -R 600 /home/vagrant/.ssh/authorized_keys
      echo 'Host 192.168.*.*' >> /home/vagrant/.ssh/config
      echo 'StrictHostKeyChecking no' >> /home/vagrant/.ssh/config
      echo 'UserKnownHostsFile /dev/null' >> /home/vagrant/.ssh/config
      chmod -R 600 /home/vagrant/.ssh/config
      ", privileged: false


end
