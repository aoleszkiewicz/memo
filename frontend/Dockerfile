FROM node:18.19.0 as build

WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package.json /usr/src/app/package.json

RUN npm install -g @angular/cli
RUN npm install

COPY . /usr/src/app

EXPOSE 4200
CMD ["ng", "serve", "--host", "0.0.0.0", "--poll", "2000", "--disable-host-check"]