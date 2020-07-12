# Docker Parent Image with Node and Typescript
FROM node:latest

# Create Directory for the Container
WORKDIR /app

# Copy the package.json first for build speed
COPY package.json /app
RUN npm install 
RUN npm install typescript -g

# Copy rest of the files we need to our new Directory
ADD . /app

# Expose the port outside of the container
EXPOSE 3000

# transpile src directory to dist
RUN npm run build-ts

# Start the server
ENTRYPOINT ["node", "dist/app.js"]