FROM node:alpine as node-container

WORKDIR /tmp/app

# Installing npm packages
COPY ./package.json ./
COPY ./yarn.lock ./
RUN yarn install

# Copying everything to Docker
COPY ./ ./

# Generating build
RUN yarn build

# Steps added for running a local nginx for serving static files
FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d
COPY --from=node-container /tmp/app/build /usr/share/nginx/html

# Debug statements
# RUN chmod +x ./start.sh
# CMD ["./start.sh"]
