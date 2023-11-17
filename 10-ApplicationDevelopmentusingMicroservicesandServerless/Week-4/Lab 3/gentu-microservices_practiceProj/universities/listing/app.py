from flask import Flask
from flask_cors import CORS
import json

app = Flask("List of Universities")
CORS(app)

with open("UK_Universities.json", "r") as unifile:
    data = json.load(unifile)


@app.route("/colleges")
def getCollegesList():
    colleges = []
    for college in data:
        colleges.append(college["name"])
    return json.dumps({"Colleges": colleges},indent=4)


@app.route("/colleges/<name>")
def getCollegesListByName(name):
    colleges = []
    for college in data:
        if college["name"].__contains__(name):
            colleges.append(college["name"])
    return json.dumps({"Colleges": colleges},indent=4)


if __name__ == "__main__":
    app.run(debug=True)
