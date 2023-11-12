import os, json, urllib
import ssl
from flask import Flask, Response, abort, request
from datetime import datetime
import time
import logging
from logging import StreamHandler
from ibm_watson import NaturalLanguageUnderstandingV1
from ibm_cloud_sdk_core.authenticators import IAMAuthenticator
from ibm_watson.natural_language_understanding_v1 import Features
# Define the base logger
logging.getLogger("analyzer").setLevel(logging.DEBUG)
log = logging.getLogger("analyzer")
stream_handler = StreamHandler()
stream_formatter = logging.Formatter('[%(asctime)s] [%(thread)d] [%(module)s : %(lineno)d] [%(levelname)s] %(message)s')
stream_handler.setFormatter(stream_formatter)
log.addHandler(stream_handler)
# Flask config
app = Flask(__name__, static_url_path='')
app.config['PROPAGATE_EXCEPTIONS'] = True
# Define global variables
global tone_analyzer_ep
global identity_token_url
global api_key
global refresh_token
global access_token
global is_refresh
global expire_time

def analyze_tone(input_text):
    api_key = os.getenv('TONE_ANALYZER_API_KEY')
    api_url = os.getenv('TONE_ANALYZER_SERVICE_API')
    authenticator = IAMAuthenticator(api_key)
    natural_language_understanding = NaturalLanguageUnderstandingV1(
    version='2021-08-01',
    authenticator=authenticator
    )
    natural_language_understanding.set_service_url(api_url)
    response = natural_language_understanding.analyze(
		  text=input_text,
		  features={
		      "classifications": {
		              "model": "tone-classifications-en-v1",
		      }
		  },
		  )
    tone=response.result.get("classifications")[0].get("class_name")
    return [{ "tone_name" : tone}]
'''
 This is the analyzer API that accepts POST data as describes below:
 POST http://localhost:5000/tone body=\
 {
     "input_text": "this is cool"
 }
'''
@app.route('/tone', methods=['POST'])
def tone():
    log.info("Serving /tone")
    if not request.json or not 'input_text' in request.json:
        log.error("bad body: '%s'", request.data)
        abort(400)
    input_text = request.json['input_text']
    log.info("input text is '%s'", input_text)
    tone_doc = analyze_tone(input_text)
    return (json.dumps(tone_doc), 200)


@app.route('/', methods=['GET'])
def home():
	log.info("home")
	return ("This works")

if __name__ == '__main__':
    PORT = '5000'
    app.run(host='0.0.0.0', port=int(PORT))
