FROM node:15.6.0-alpine
WORKDIR /usr/src/app
COPY . .

RUN npm init && \
    npm install express && \
    npm install mysql && \
    npm install node-random-name

CMD ["node", "index.js"]