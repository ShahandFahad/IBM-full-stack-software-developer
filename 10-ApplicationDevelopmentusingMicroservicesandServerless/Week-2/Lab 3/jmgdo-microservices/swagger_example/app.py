import os
from flask import Flask, jsonify, make_response, request
from flask_cors import CORS
from flask import json
from werkzeug.exceptions import HTTPException
from flask import send_from_directory

PORT = 5000

myApp = Flask(__name__)

tasks = [{"name":"Laundry","description":"Do the laundry this weekend"},
            {"name":"Assignment","description":"Finish assignment by Friday"},
            {"name":"Call family","description":"Call family Sunday morning"},
            {"name":"Pay bills","description":"Pay the electricity and water bill"}]


@myApp.route('/swaggerfile_8')
def send_swagger():
  return send_from_directory('.', "swagger_config.json")

@myApp.route('/')
def get_home():
  return jsonify({'home': "tasks"})

@myApp.route('/tasks')
def get_tasks():
  return jsonify({'tasks': tasks})

@myApp.route('/task',methods=['POST'])
def add_tasks():
  client_input = list(request.form.values())
  name = client_input[0]
  description = client_input[1]

  task = {"name":name,"description":description}
  tasks.append(task)
  return "Task Successfully added to the list"

@myApp.route('/task/<name>')
def get_task(name):
  filtered_task = list(filter(lambda task: task.get('name') == name, tasks))

  if(len(filtered_task) == 0):
    return "No such task found"
  else:
    return jsonify(filtered_task)
    
@myApp.route('/task/<name>',methods=['DELETE'])
def delete_task(name):
  itemdel = False
  for index in range(len(tasks)):
    if (tasks[index]['name'] == name):
      del tasks[index]
      itemdel = True
      break
  if(itemdel):
    return "Task deleted"
  else:
    return "No such task found"
    
@myApp.errorhandler(HTTPException)
def handle_exception(e):
  response = e.get_response()
  response.data = json.dumps({
    "code": e.code,
    "name": e.name,
    "description": e.description,
  })
  response.content_type = "application/json"
  return response

if __name__ == '__main__':
  CORS = CORS(myApp)
  myApp.run(port=PORT, debug=False)
