from datetime import datetime
from traceback import extract_stack
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

def tracePath():
  stack = extract_stack()
  for trace in reversed(stack):
    file, line, method, call = trace
    if 'file_logger.py' not in file:
      return str(file), str(line)
  return 'Error Tracing Stack', '-1'

def writeLog(msg, logType):
  header = generateHeader(logType)  
  filename, line_number = tracePath()
  filename = ''.join(filename.split('/')[-1:])
  logString = '{}{} <{}:{}>\n'.format(header, msg, filename, line_number)
  writeToFile(logString)

def log(msg):
	writeLog(msg, 'LOG')

def debug(msg):
	writeLog(msg, 'DBG')

def error(msg):
	writeLog(msg, 'ERR')
	fileinfo = getframeinfo(stack()[1][0])
	raise Exception('ERROR: {} at <{}:{}>'.format(msg, fileinfo.filename, fileinfo.lineno))