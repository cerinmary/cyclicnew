//const mongoose = require("mongoose");
const mongoose = require("mongoose");
//connecting database
mongoose.connect("mongodb+srv://cerinmary:cerinsiby@cluster0.ck6wsrc.mongodb.net/?retryWrites=true&w=majority")

const Schema = mongoose.Schema;


var movieSchema = new Schema({
  mName : String,
  mActor : String,
  mActress : String,
  mDirector: String,
  mRelease : Number,
  mCamera: String,
  mProducer : String,
  mLanguage: String
  

});

var MovieInfo=mongoose.model("movies",movieSchema);
module.exports = MovieInfo;