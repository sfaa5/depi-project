# Stage 1: Build the frontend
FROM node:18 AS frontend

# Set the working directory to /app/client
WORKDIR /app/client

# Copy the frontend code
COPY client/package*.json ./

# Install frontend dependencies
RUN npm install

# Build the frontend
COPY client/ ./
RUN npm run build

# Stage 2: Build the backend
FROM node:18 AS backend

# Set the working directory to /app/server
WORKDIR /app/server

# Copy the backend code
COPY server/package*.json ./

# Install backend dependencies
RUN npm install

# Copy the rest of the backend code
COPY server/ ./

# Expose the port your backend is running on
EXPOSE 3000

# Start the backend
CMD ["npm", "start"]

# Stage 3: Final image
FROM node:18

# Set the working directory to /app
WORKDIR /app

# Copy backend files from the build stage
COPY --from=backend /app/server /app/server

# Copy frontend build files from the build stage
COPY --from=frontend /app/client/build /app/server/public

# Expose the port your backend is running on
EXPOSE 3000

# Start the backend
CMD ["npm", "start"]
