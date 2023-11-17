from flask import Flask
from flask_cors import CORS
import json

app = Flask("University Websites")
CORS(app)

with open("UK_Universities.json", "r") as unifile:
    data = json.load(unifile)


@app.route("/websites/<name>")
def getCollegesWebsites(name):
    webpages = []
    for college in data:
        if college["name"].__contains__(name):
            for website in college["web_pages"]:
                webpages.append(website)
    return json.dumps({"Webpages": webpages},indent=4)

if __name__ == "__main__":
    app.run(debug=True, port=5001)