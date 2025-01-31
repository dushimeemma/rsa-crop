FROM node:19-bullseye
# set work directory
WORKDIR /app

# set env variables
ENV DATABASE_URL=[DATABASE_URL]

# copy project
COPY . .

# Build
RUN yarn && yarn build

# Expose express port
EXPOSE 5001

# Run
CMD [ "node", "dist/index.js" ]