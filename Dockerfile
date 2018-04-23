# If you prefer to encapsulate the Node.js parts of this tutorial in a
# Docker container, you can copy our example Dockerfile and docker-compose.yml
# into your project.
#
# To start an interactive shell in the Node.js container,
# use `./docker-compose run --service-ports example`
#
# docker-compose.yml provides misc dev conveniences:
# it opens relevant ports for `ionic serve`and  maps the project directory
# from the host to the container so that edits on the host appears in
# the container and vice versa

FROM node:8

RUN apt-get update && apt-get install -y wget unzip

# https://ionicframework.com/docs/intro/installation/
RUN npm install -g ionic@3.20.0 cordova@8.0.0
