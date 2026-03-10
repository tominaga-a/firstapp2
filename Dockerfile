FROM node:lts
WORKDIR /app
COPY ./package*json .
RUN npm install
COPY . . 
RUN chmod +x wait-for-it.sh
RUN npx prisma generate 

EXPOSE 3000

CMD ["/bin/sh","-c","/app/wait-for-it.sh db:5432 --timeout=30 && npx prisma migrate deploy && node index.js"]