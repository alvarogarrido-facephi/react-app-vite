FROM node:16.17.1-alpine3.16 as build
WORKDIR /usr/app
COPY . .
RUN npm install
RUN npm run build

FROM nginx:1.23.1-alpine
EXPOSE 3000
COPY /nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/app/dist /usr/share/nginx/html
