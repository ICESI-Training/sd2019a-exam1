# -*- mode: ruby -*-
# vi: set ft=ruby :
webservers = {
  "webserverA" => { :ip => "192.168.56.117", :cpus => 1, :mem => 1024 },
  "webserverB" => { :ip => "192.168.56.118", :cpus => 1, :mem => 1024 }
}
Vagrant.configure("2") do |config|
  webservers.each_with_index do |(hostname, info), index|
     config.vm.define hostname do |cfg|
       cfg.vm.provider :virtualbox do |vb, override| 
         config.vm.box = "centos_7"
         override.vm.network "private_network", ip: "#{info[:ip]}"
         override.vm.hostname = hostname
         override.vm.provision "file", source: "~/.ssh/id_rsa.pub", destination: "$HOME/.ssh/authorized_keys"
         vb.name = hostname
       end
     end
  end
end
