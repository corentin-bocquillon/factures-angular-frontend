# base image
FROM node:13.6.0

# set working directory
WORKDIR /usr/src/app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json ./package.json
RUN npm install
RUN npm install -g @angular/cli@7.3.9

# Bundle app source code
COPY . /usr/src/app

EXPOSE 4200

# start app
CMD ["ng", "serve", "--host", "0.0.0.0", "--proxy-config", "proxy.config.json"]
