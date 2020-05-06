# build stage
FROM node:10-alpine

RUN mkdir -p /app/cys-admin-client
WORKDIR /app/cys-admin-client

COPY package.json /app/cys-admin-client
COPY package-lock.json /app/cys-admin-client

RUN npm install

COPY . /app/cys-admin-client

CMD ["npm", "start"]