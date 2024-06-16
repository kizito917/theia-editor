# Use an official Node runtime as a parent image
FROM node:20

# Install build dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    python3 \
    python3-pip \
    libsecret-1-dev \
    && rm -rf /var/lib/apt/lists/*

# Set the Python path for node-gyp
ENV PYTHON=/usr/bin/python3

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Expose port and start the application
EXPOSE 8080
CMD [ "npm", "start" ]
