const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const multer = require('multer');

app.use(bodyParser.json());
var storage = multer.diskStorage({
   destination: function (req, file, cb) {
      cb(null, 'uploads');
   },
   filename: function (req, file, cb) {
      cb(null, file.originalname);
   }
});
var upload = multer({ storage: storage });

app.post('/api/upload', upload.single('file'),(req, res) => {
  const file = req.file;
    res.send(apiResponse({message: 'File uploaded successfully.', file}));
});
function apiResponse(results){
    return JSON.stringify({"status": 200, "error": null, "response": results});
}
app.listen(3000,() =>{
  console.log('Server started: port 3000');
});
