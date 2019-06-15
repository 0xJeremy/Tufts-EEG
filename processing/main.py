import sys, os
from json import dumps as stringToJSON
import time
import socket
import copy

##################
### PARAMETERS ###
##################

socket_path = '/tmp/node-python-sock'
client = socket.socket(socket.AF_UNIX, socket.SOCK_STREAM)
client.connect(socket_path)

############
### MAIN ###
############

def main():
	data = {}
	while True:
		try:
			data['message'] = input()
			client.send(stringToJSON(data).encode())
		except KeyboardInterrupt:
			client.close()
			sys.exit()


if __name__ == '__main__':
	main()