# Use a base image with necessary dependencies
FROM ubuntu:latest

WORKDIR /app

# Update package lists and install essential tools
RUN apt-get update && \
    apt-get install -y \
    build-essential \
    default-jdk \
    python3 \
    python3-pip \
    nodejs \
    npm \
    g++

COPY package*.json .


RUN npm install

COPY . .

EXPOSE 5000

CMD ["node","server.js"]



# Add your code and configuration files
# ADD . /your/app/directory

# Set the working directory
# 

# Command to run your application
# CMD ["python3", "your_script.py"]
