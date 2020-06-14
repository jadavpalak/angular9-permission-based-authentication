FROM alpine:latest

RUN apk update && apk add nodejs && apk add npm
RUN npm i -g http-server
WORKDIR /app
ADD ./dist/./ /app
CMD ["http-server"]

EXPOSE 4200