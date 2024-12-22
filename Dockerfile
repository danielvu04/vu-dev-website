# Step 1: Use a Node.js base image to build the React app
FROM node:16 AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Expose port 3000 for the React development server
EXPOSE 3000

# Build the React app for production
CMD ["npm", "start"]
