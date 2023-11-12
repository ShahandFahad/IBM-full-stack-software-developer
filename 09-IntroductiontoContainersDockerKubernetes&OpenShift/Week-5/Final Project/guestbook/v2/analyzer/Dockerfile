FROM ubuntu:20.04

ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update -qq && \
    apt-get install -y -q --no-install-recommends \
    openssl python3.7 python3-pip

RUN pip3 install --upgrade pip setuptools
RUN pip3 install requests Flask Flask-Cache pyopenssl ibm-watson==6.0.0

# application source code including static files, templates, etc
ADD src /app/src

EXPOSE 5000

ENTRYPOINT ["python3", "/app/src/app.py"]
