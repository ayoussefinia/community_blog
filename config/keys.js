require("dotenv").config();

module.exports = {
  mongoURI: "mongodb+srv://ayoussefinia:"+process.env.pass+"@cluster0.uescv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority" ,
  secretOrKey: "secret"
};

// module.exports = {
//   mongoURI: "mongodb://alex.youssefinia%40gmail.com:Orange1%40@ds019876.mlab.com:19876/heroku_8ksdw6hl" ,
//   secretOrKey: "secret"
// };