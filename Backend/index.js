const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
const pinRoute = require("./routes/pins");
const userRoute = require("./routes/users")

dotenv.config();

app.use(express.json()) // we can use anything as json

const port = 8800

// env for making the url not visible
mongoose
 .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        //useCreateIndex: true,
     })
 .then(() => console.log("MongoDB connected!"))
 .catch(err => console.log(err));

app.use("/api/pins", pinRoute)
app.use("/api/users", userRoute)

app.listen(port, () => {
    console.log("Backend server is running!")
})
