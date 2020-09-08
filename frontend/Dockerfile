FROM node:latest

# Creat app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app

COPY public /usr/src/app/public
COPY src /usr/src/app/src


RUN npm install 

CMD ["npm","start"]