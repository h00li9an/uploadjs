This is a small nodejs api to upload a file.

Node version: 16.14.2

Build: npm install

Run: npm start

Docker : docker-compose up

Docker compose rebuild: docker-compose up --build


Usage: curl --request POST \
  --url http://127.0.0.1:3000/api/upload \
  --header 'Content-Type: multipart/form-data; \
  --form file=@/home/user/file.txt
