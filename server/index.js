const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const ObjectID = require("mongodb").ObjectID;
const fileUpload = require("express-fileupload");

const cors = require("cors");
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(fileUpload());

const port = process.env.PORT || 5000;

const uri = `mongodb+srv://${process.env.BD_USER}:${process.env.BD_PASS}@cluster0.a3up8.mongodb.net/${process.env.BD_NAME}?retryWrites=true&w=majority`;
console.log(uri);

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((err) => {
  console.log("connection error:", err);
  const bookingData = client.db("blogs").collection("bookings");

  app.post("/booking", (req, res) => {
    const file = req.files.image;
    const {
      clinicname,
      address1,
      address2,
      landLine1,
      landLine2,
      zip,
      city,
      country,
      payment,
      text,
    } = req.body;
    console.log(file);
    console.log(req.body);
    const newImg = file.data;
    const encImg = newImg.toString("base64");

    var image = {
      contentType: file.mimetype,
      size: file.size,
      img: Buffer.from(encImg, "base64"),
    };

    bookingData
      .insertOne({
        clinicname,
        image,
        address1,
        address2,
        zip,
        city,
        landLine1,
        landLine2,
        country,
        payment,
        text,
        image,
      })
      .then((result) => {
        res.send(result.insertedCount > 0);
        console.log(result);
      });

  });

  app.get('/booking', (req, res) => {
    bookingData.findOne({ _id: ObjectID("622968f26a9f434cdcb2f2d7") })
        .then(document => {
            res.send(document);
        })
});

  console.log("database connection successfully");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
