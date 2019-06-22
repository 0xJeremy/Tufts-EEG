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
	while True:
		try:
			tmp = input()
			data =[tmp for i in range(8)]
			socket.send(data)
			
		except KeyboardInterrupt:
			socket.close()
			sys.exit()


if __name__ == '__main__':
	main()