FROM node:16.14.2
WORKDIR /app
COPY index.js package.json /app/
RUN npm install
#USER node
cmd ["npm", "start"]
