FROM node:20-alpine as base

WORKDIR /.
COPY . .
EXPOSE 3000

FROM base as production
RUN npm install
CMD ["node", "index.js"]

FROM base as dev
RUN npm install -g -D nodemon && npm install
CMD ["nodemon", "index.js"]