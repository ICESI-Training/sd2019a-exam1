VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  #config.ssh.insert_key = 
  config.vm.define :bl_server do |lb|
    lb.vm.box = "centos_7"
    lb.vm.hostname = "lb"
    #lb.ssh.forward_agent = true
    #lb.ssh.port = 2222
    lb.vm.network "forwarded_port", guest: 22, host:2222, id: "ssh", auto_correct: true
    #lb.vm.network "forwarded_port", guest: 80, host:8080, id: "web", auto_correct: true
    lb.vm.network :private_network, ip: "192.168.56.101"
    lb.vm.provider :virtualbox do |vb|
      vb.customize ["modifyvm", :id, "--memory", "512","--cpus", "1", "--name", "bl_server" ]
    end
    config.vm.provision :ansible do |ansible|
    # ansible.inventory_path = "/etc/ansible/hosts"
      ansible.verbose = true
      ansible.playbook = "playbooks/playbook_lb.yml"
    end
  end
  config.vm.define :wb_server1 do |wb1|
    wb1.vm.box = "centos_7"
    wb1.vm.hostname = "wb1"
   # wb1.ssh.forward_agent = true
   # wb1.ssh.port = 2222
    wb1.vm.network "forwarded_port", guest: 22, host:2222, id: "ssh", auto_correct: true
    wb1.vm.network "forwarded_port", guest: 80, host:8080, id: "web", auto_correct: true
    wb1.vm.network :private_network, ip: "192.168.56.102"
    wb1.vm.provider :virtualbox do |vb|
      vb.customize ["modifyvm", :id, "--memory", "512","--cpus", "1", "--name", "wb_server1_a" ]
    end
    config.vm.provision :ansible do |ansible|
     # ansible.inventory_path = "/etc/ansible/hosts"
      ansible.verbose = true
      ansible.playbook = "playbooks/playbook_wb.yml"
    end
  end
  config.vm.define :wb_server2 do |wb2|
    wb2.vm.box = "centos_7"
    wb2.vm.hostname = "wb2"
   #wb2.ssh.forward_agent = true
   # wb2.ssh.port = 2222
    wb2.vm.network :private_network, ip: "192.168.56.103"
    wb2.vm.network "forwarded_port", guest: 22, host:2222, id: "ssh", auto_correct: true
    wb2.vm.network "forwarded_port", guest: 80, host:8080, id: "web", auto_correct: true
    wb2.vm.provider :virtualbox do |vb|
    vb.customize ["modifyvm", :id, "--memory", "512","--cpus", "1", "--name", "wb_server1_b" ]
    end
     config.vm.provision :ansible do |ansible|
     # ansible.inventory_path = "/etc/ansible/hosts"
      ansible.verbose = true
      ansible.playbook = "playbooks/playbook_wb.yml"
    end
  end
  config.vm.define :database do |db|
     db.vm.box = "centos_7"
     db.vm.network :private_network, ip: "192.168.56.104"
     db.vm.provider :virtualbox do |vb|
     vb.customize ["modifyvm", :id, "--memory", "512","--cpus", "1", "--name", "database" ] 
     end
     config.vm.provision "ansible" do |ansible|
     ansible.playbook = "db_playbook.yml"
  end
 end
 end
