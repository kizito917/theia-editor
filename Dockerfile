# Use an official Node runtime as a parent image
FROM node:20

# Install libsecret-1-dev
RUN apt-get update && apt-get install -y libsecret-1-dev

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Expose port and start the application
EXPOSE 8080
CMD [ "npm", "start" ]
