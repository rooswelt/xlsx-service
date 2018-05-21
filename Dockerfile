
FROM node:8.11.1-alpine

ENV NODE_DIR /var/www
WORKDIR $NODE_DIR

# cache npm
COPY package.json /tmp/
RUN cd /tmp \
    && npm install \
    && apk del .build-deps

COPY . $NODE_DIR
RUN cp -a /tmp/node_modules $NODE_DIR/

#HEALTHCHECK --interval=5s --timeout=3s \
#    CMD curl --silent --fail http://localhost:3000/ping || exit 1

EXPOSE 3000

CMD [ "npm", "start" ]