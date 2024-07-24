FROM node:alpine

EXPOSE 3000

WORKDIR /app

COPY . .

# proxy url
RUN sed -i 's|"http://127.0.0.1:8080"|"http://sttt-api:8080"|' package.json

RUN npm install

CMD ["npm", "run", "start"] 

# docker build -t super-ttt-front .
# docker run -p 3000:3000 super-ttt-front