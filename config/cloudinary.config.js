// cloudinary package for cloudinary api
const cloudinary = require("cloudinary").v2;
// package to be able to parse multi/form-data format;
// multer is a middleware that lets express parse the data type multipart/form-data
// multer is going to create the body key and the file/files key in the request
const multer = require("multer");
// matches multer with cloudinary
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const { CLOUDINARY_NAME, CLOUDINARY_KEY, CLOUDINARY_SECRET } = process.env;

cloudinary.config({
  cloud_name: CLOUDINARY_NAME,
  api_key: CLOUDINARY_KEY,
  api_secret: CLOUDINARY_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    allowed_formats: ["jpg", "jpeg", "png"],
    folder: "movies",
  },
});

module.exports = multer({ storage });
