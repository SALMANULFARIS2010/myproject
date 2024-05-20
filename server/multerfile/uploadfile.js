const multer=require('multer');
const storages = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, "_hr" + uniqueSuffix + "_" +file.originalname)
    }
  })
  const upload = multer({ storages: storages })


  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'images/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, "_img" + uniqueSuffix + "_" +file.originalname)
    }
  })
  //  
  
  
  const uploads = multer({ storage: storage })

  module.exports = {uploads,upload};

