from flask import Flask

app = Flask("My IQSF World Application")

@app.route("/")
def hello():
    return "Hello, Dev.Iqsf. I can't fix that."

if __name__ == "__main__":
    app.run(debug=True)

