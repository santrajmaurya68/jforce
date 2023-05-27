
const express = require('express');
const cors = require("cors");
const app = express();
const mongoose = require('mongoose');
app.use(cors())
mongoose.connect('mongodb://localhost/jfours', { useNewUrlParser: true });

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  phone: {
    type: String,
    require: true
  }
});
const User = mongoose.model('user', UserSchema);
console.log(User)
const Posted = new mongoose.Schema({
  Voter: {
    type: String,
    require: true
  },
  Name: {
    type: String,
    require: true
  }
});
const Voter = mongoose.model('Voting', Posted);
console.log(Voter)
app.get("/", (req, resp) => {
  resp.send("app is working ... ")
  // console.log(req)
});
app.use(express.json())
app.post("/register", async (req, resp) => {
  try {
    let user = new User(req.body);
    let data = await user.save()
    data = data.toObject();
    delete data.password
    resp.send(data);
    console.log(data)
  }
  catch (error) {
    req.status(400).json('Error: ' + error.message);
  }
})
app.post("/login", async (req, resp) => {
  try {
    console.log(req.body)
    if (req.body.password && req.body.email) {
      let user = await User.findOne(req.body).select("-password");
      if (user) {
        resp.send(user)
      }
      else {
        resp.send({ result: 'No user found' })
      }
    }
    else {
      resp.send({ result: 'No user found' })
    }
  }
  catch (error) {
    req.status(400).json('Error: ' + error.message);
  }
})

app.post("/add", async (req, resp) => {
  let product = new Voter(req.body);
  let result = await product.save();
  resp.send(result);
  console.log(result)
})
app.get("/addmin", async (req, resp) => {
  let result = await Voter.find()
  if (result) {
    resp.send(result)
  }
  else {
    resp.send({ result: "No reslt is found" })
  }
  console.log(result);
})
  ;

app.listen(5000)