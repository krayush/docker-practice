# There are 3 basic steps that you will find in every DOCKER image
# FROM - Base image
# RUN - Run a particular command inside the container
# CMD - Running default command when container starts

# Apart from this you can also use WORKDIR or COPY 
# COPY - Copying from local machine to Docker container
# WORKDIR - Setting the work directory inside the container

# Alpine is a minimal image which contains a few useful packages/tools
FROM alpine

# Installing redis here
# Instead of this, you can also use redis image directly from docker
RUN apk add --update redis

# Startup command - this command gets executed whenever the container will start from this image
CMD ["redis-server"]