# -*- mode: ruby -*-
# vi: set ft=ruby :
webservers = {
  "lbServer" => { :ip => "192.168.56.116", :cpus => 1, :mem => 1024 },
  "webserverA" => { :ip => "192.168.56.117", :cpus => 1, :mem => 1024 },
  "webserverB" => { :ip => "192.168.56.118", :cpus => 1, :mem => 1024 },
  "dbserver" => { :ip => "192.168.56.119", :cpus => 1, :mem => 1024 }
}
Vagrant.configure("2") do |config|
  webservers.each_with_index do |(hostname, info), index|
     config.vm.define hostname do |cfg|
       cfg.vm.provider :virtualbox do |vb, override| 
         config.vm.box = "centos_7"
         override.vm.network "private_network", ip: "#{info[:ip]}"
         override.vm.hostname = hostname
         override.vm.provision "file", source: "~/.ssh/id_rsa.pub", destination: "/home/vagrant/.ssh/public_key"
         override.vm.provision "shell", inline: "cat /home/vagrant/.ssh/public_key >> /home/vagrant/.ssh/authorized_keys"
         override.vm.provision "shell", inline: "rm /home/vagrant/.ssh/public_key"
         vb.name = hostname
       end
     end
  end
end
