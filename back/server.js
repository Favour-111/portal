const express = require("express");
const app = express();
const route = require("./Routes/route");
const PORT = 4000;
const cors = require("cors");
const StudentRoute = require("./Routes/StudentRoute");
const classRoute = require("./Routes/ClassRoute");
const subjectRoute = require("./Routes/Subjectroute");
//middleware
app.use(express.json());
app.use(cors());
app.use(route);
app.use(StudentRoute);
app.use(classRoute);
app.use(subjectRoute);

//app listener

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
//connecting mongoDb to express

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://omojolaobaloluwa:obalolu1976@cluster0.q9yj9ht.mongodb.net/PortalData"
  )
  .then(() => {
    console.log("connection established");
  })
  .catch((err) => console.log(err.msg));
