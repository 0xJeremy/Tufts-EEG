from datetime import datetime
from inspect import getframeinfo, stack
from json import load as jsonFileToDict

logPath = '../EEG.log'

def writeToFile(msg):
	with open(logPath, 'a+') as f:
		f.write(msg)

def generateHeader(logType):
	return '|{}| [{}] '.format(generateTime(), logType)

def generateTime():
	t = datetime.now()
	return '{}{}Z'.format(t.strftime('%Y-%m-%dT%H:%M:%S.'), t.strftime('%f')[0:3])

def writeLog(msg, logType):
	header = generateHeader(logType)
	fileinfo = getframeinfo(stack()[1][0])
	filepath = ''.join(fileinfo.filename.split('/')[-2:])
	logString = '{}{} <{}:{}>\n'.format(header, msg, fileinfo.filename, fileinfo.lineno)
	writeToFile(logString)

def log(msg):
	writeLog(msg, 'LOG')

def debug(msg):
	writeLog(msg, 'DBG')

def error(msg):
	writeLog(msg, 'ERR')
	fileinfo = getframeinfo(stack()[1][0])
	raise Exception('ERROR: {} at <{}:{}>'.format(msg, fileinfo.filename, fileinfo.lineno))