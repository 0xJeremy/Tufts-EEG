#!/usr/bin/env python3

import sys, os
from utils.comm import comm
import utils.file_logger as logger

##################
### PARAMETERS ###
##################


########################
### GLOBAL VARIABLES ###
########################

socket = comm()

############
### MAIN ###
############

def main():
	socket.send('connected')
	while True:
		try:
			tmp = input()
			data =[tmp for i in range(8)]
			socket.send(data)
			
		except KeyboardInterrupt:
			socket.send('disconnected')
			socket.close()
			sys.exit()


if __name__ == '__main__':
	main()