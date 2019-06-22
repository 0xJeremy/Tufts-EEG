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
	data = []
	while True:
		try:
			data.append(input())
			socket.send(data)
			
		except KeyboardInterrupt:
			socket.close()
			sys.exit()


if __name__ == '__main__':
	main()