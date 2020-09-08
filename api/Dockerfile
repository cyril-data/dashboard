FROM python:3.8
# RUN apt-get install -y python3-pip python3-dev 
# RUN apt-get update && apt-get install -y \
# net-tools inetutils-traceroute \
# iputils-ping xinetd telnetd

# RUN apt-get install software-properties-common\
# && apt-add-repository universe \
# && apt-get update\
# && apt-get install python-pip

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY requirements.txt /usr/src/app

RUN pip install -r requirements.txt

# ENTRYPOINT ["flask"]

COPY . /usr/src/app
# COPY bdd /usr/src/app/*.sav .

CMD ["python", "./api.py"]
