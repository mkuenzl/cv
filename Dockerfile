FROM node:16.14.2 AS development
ENV NODE_ENV development

WORKDIR /app

COPY package.json .
#COPY package-lock.json .
RUN npm install --save react react-dom react-scripts emailjs-com

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]
