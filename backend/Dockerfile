FROM node:10-alpine

RUN mkdir -p /app/cys-admin-server
WORKDIR /app/cys-admin-server

COPY package.json /app/cys-admin-server
COPY package-lock.json /app/cys-admin-server

RUN npm install

COPY . /app/cys-admin-server

CMD ["npm", "start"]