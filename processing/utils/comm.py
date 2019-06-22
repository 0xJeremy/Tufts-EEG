import socket
from json import dumps as stringToJSON
import utils.file_logger as logger

SOCKET_PATH = '/tmp/node-python-sock'

class comm():
	def __init__(self):
		self.numSent = 0
		self.sendHistory = []
		self.client = socket.socket(socket.AF_UNIX, socket.SOCK_STREAM)
		self.client.connect(SOCKET_PATH)
		logger.log('Socket connection successfully established.')

	def send(self, probes):
		msg = {'time': logger.generateTime(),
			   'numProbes': len(probes),
			   'data': stringToJSON(probes)}
		jsonMsg = stringToJSON(msg)
		self.client.send(jsonMsg.encode())
		self.sendHistory.append(msg)
		self.numSent += 1
		logger.log('Sent message {}: {}'.format(self.numSent, jsonMsg))

	def close(self):
		self.client.close()
