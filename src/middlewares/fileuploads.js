const multer = require('multer');
const path = require("path");

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'src/images');
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+"-"+file.originalname);
    },
})

const fileFilter = (req,file,callback)=>{
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        callback(null, true);
      } else {
        callback(new Error("Incorrect mime type"), false);
      }
}

const options = {
    storage,
    fileFilter,
    limits:{
        fileSize: 1024 * 1024 * 5,
    }
}

const uploads = multer(options);

module.exports = uploads;