from flask import Flask

app = Flask("My Flask Application")


@app.route("/")
def hello():
    return "<h1>IQSF: A part me has left with you. And I will not be same as I used to be. It's me and myself battling.</h1> " +
    "<br>You were the only wish I wished to be ture. For you, I will be there, everywhere. I wish we had met on the right time."


if __name__=="__main__":
    app.run(debug=True) 
    # When no port is specified, starts at default port 5000
