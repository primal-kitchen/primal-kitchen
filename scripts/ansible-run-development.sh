#!/bin/sh

# TODO: commit inventory file if possible or document how to create it
# TODO: commit local private key file if possible or document how to create it
# TODO: read user from env...

ansible-playbook --private-key=~/.vagrant.d/insecure_private_key \
	-u vagrant \
	-i .vagrant/provisioners/ansible/inventory/vagrant_ansible_inventory \
	ansible/playbook-start.development.yaml
