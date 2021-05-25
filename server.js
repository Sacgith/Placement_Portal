const express = require("express");
const connectDB = require("./config/db");

const app = express();

//connect Database
connectDB();

app.get("/", (req, res) => res.send("Server APi is running ... "));

//routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/profile', require('./routes/profile'));
app.use('/api/posts', require('./routes/posts'));


const PORT = process.env.PORT || 7000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
