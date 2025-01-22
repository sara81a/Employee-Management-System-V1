# Use the latest LTS version of Node.js
FROM node:18-alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application files
COPY ../.. .

# Stage 2: Serve React app with Nginx
#FROM nginx:alpine
#COPY --from=build /app/build /usr/share/nginx/html
# Expose the port your app runs on
EXPOSE 5173

# Define the command to run your app
CMD ["npm","run","dev"]
#CMD ["nginx", "-g", "daemon off;"]

# Start the Vite development server
#CMD ["npm", "run", "dev", "--", "--host"]
