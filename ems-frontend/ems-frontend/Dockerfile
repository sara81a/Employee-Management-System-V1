# Use the latest LTS version of Node.js
FROM node:22-alpine AS build

#Set the working directory inside the container
#run , cmd ,copy >> will be executed inside the /app
WORKDIR /app

# Copy package.json and package-lock.json to /app
COPY package*.json ./

# Install dependencies from .json
RUN npm install

# Copy the entire files in /app
COPY . .

EXPOSE 5173

# Define the command to run your app in development mode
# npm run dev
CMD ["npm","run","dev"]

