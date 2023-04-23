FROM node:latest

RUN mkdir -p /store

# Copying source files
# COPY . /app

# Installing dependencies
# COPY package*.json /store

WORKDIR /store
# VOLUME [ "/app" ]
# RUN yarn

# Building app
# RUN npm run build --production
# EXPOSE 3000

# Running the app
# CMD "yarn" "dev"
EXPOSE 3001