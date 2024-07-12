FROM node:alpine

EXPOSE 3000

WORKDIR /app

COPY . .

RUN npm install

CMD ["npm", "run", "start"] 

# docker build -t super-ttt-front .
# docker run -p 3000:3000 super-ttt-front