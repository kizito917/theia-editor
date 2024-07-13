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
ENV PUPPETEER_SKIP_DOWNLOAD = true

# Create app directory
WORKDIR /usr/src/theia

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN yarn

# Build Theia
RUN yarn theia build

# Download and install plugins
RUN yarn download:plugins

# Bundle app source
COPY . .

EXPOSE 3000-9000

CMD [ "node", "/usr/src/theia/src-gen/backend/main.js", "/usr/src/project", "--hostname=0.0.0.0", "--plugins=local-dir:/usr/src/theia/plugins" ]