# base image
FROM node:13.6.0

COPY ./docker/docker-entrypoint.sh /docker-entrypoint.sh

# Install nginx to serve the angular app
RUN apt-get update
RUN apt-get install -y nginx

COPY ./docker/etc/nginx/sites-enabled/site.conf /etc/nginx/sites-enabled/site.conf
RUN rm /etc/nginx/sites-enabled/default

# set working directory
WORKDIR /usr/src/app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package*.json ./
RUN npm install
RUN npm install -g @angular/cli

# Bundle app source code
COPY . /usr/src/app

RUN ng build --prod

EXPOSE 80

# CMD ["ng", "serve", "--proxy-config", "proxy.config.json"]

# start app
ENTRYPOINT ["/docker-entrypoint.sh"]
