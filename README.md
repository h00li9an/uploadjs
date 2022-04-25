This is a small nodejs api to upload a file.

Node version: 16.14.2

Build: npm install

Run: npm start

Docker : docker run -it -p 3000:3000 h00li9an/uploadjs

Docker compose: docker-compose up

Files will be uploaded to the "uploads" directory in the project path.

Usage: curl --request POST \
  --url http://127.0.0.1:3000/api/upload \
  --header 'Content-Type: multipart/form-data; \
  --form file=@/home/user/file.txt
