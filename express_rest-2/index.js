require("dotenv").config();
//const fs = require('fs');
const express = require('express');
const app = express();
//const { spawn } = require('child_process')
const Joi = require('joi');
const userRouter = require("./api/users/user.router");
const productRouter = require("./api/products/product.router");
const postRouter = require("./api/post/post.router");
const commentRouter = require("./api/comments/comment.router");
app.use(express.json());
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/posts", postRouter);
app.use("/api/comments", commentRouter);

/*app.post('/', (req, res) => {
    let dataToSend
    let largeDataSet = []
    const body = req.body;
    var productid= req.body.product_id;
    var productname = req.body.product_name;
    var productbrand = req.body.product_brand;
    var reviewslanguage = req.body.reviews_language;
    var reviewsdate = req.body.reviews_date;
    var reviewstype = req.body.reviews_type;
    // spawn new child process to call the python script

    const python = spawn('python', ['/Users/me/Desktop/Python test/Hello.py',productname,productbrand,productid,reviewslanguage,reviewsdate,reviewstype])
  
    // collect data from script
    python.stdout.on('data', function (data) {
      console.log('Pipe data from python script ...')
      //dataToSend =  data;
      largeDataSet.push(data)
    })
  
    // in close event we are sure that stream is from child process is closed
    python.on('close', (code) => {
      console.log(`child process close all stdio with code ${code}`)
      // send data to browser
      res.send(largeDataSet.join(''))
    })
  })

  app.post('/tweets', (req, res) => {
    let dataToSend
    let largeDataSet = []
    const body = req.body;
    var productid= req.body.product_id;
    var productname = req.body.product_name;
    var productbrand = req.body.product_brand;

    // spawn new child process to call the python script

    const python = spawn('python', ['/Users/me/Desktop/Python test/Hello2.py',productname,productbrand,productid])
  
    // collect data from script
    python.stdout.on('data', function (data) {
      console.log('Pipe data from python script ...')
      //dataToSend =  data;
      largeDataSet.push(data)
    })
  
    // in close event we are sure that stream is from child process is closed
    python.on('close', (code) => {
      console.log(`child process close all stdio with code ${code}`)
      // send data to browser
      res.send(largeDataSet.join(''))
    })
  })


  app.post('/userimage', (req, res) => {
    let dataToSend
    let largeDataSet = []
    const body = req.body;
    var userid= req.body.user_id;
    var userimage = req.body.user_image;
    var base64 = userimage ;
    var crypto = require('crypto');
    var seed  = crypto.randomBytes(20);
    var uniqueSHA1String = crypto.createHash('sha1').update(seed).digest('hex');
    var ReadableData = require('stream').Readable
    const imageBufferData = Buffer.from(base64, 'base64')
    var streamObj = new ReadableData()
    streamObj.push(imageBufferData)
    streamObj.push(null)
    var uniqueRandomImageName= 'image-' + uniqueSHA1String + '.jpg'  ;
    streamObj.pipe(fs.createWriteStream(uniqueRandomImageName));
  })*/


app.listen(process.env.APP_PORT, () =>{
    console.log("Server up and running on PORT:",process.env.APP_PORT);
});