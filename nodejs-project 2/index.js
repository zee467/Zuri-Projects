const express = require("express");
const app = express();

const { json } = require("express");
const flights = require("./controllers/flightController");
const routes = require("./routes/flightRoute");

const port = 3000;

// parse the data
app.use(express.urlencoded({ extended: false }))

// parse json data
app.use(express.json());

// base path
app.use("/api/flight", routes);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});