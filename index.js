const express = require("express");
const { json } = require("express");
const flights = require("./controllers/flightController");
const models = require("./models/Flight");
const routes = require("./routes/flightRoute");

const app = express();

flights = [{
    title: "flight to canada",
    time: "1pm",
    price: 26000,
    date: "26-06-2022"
}]

app.use(json());

app.use("/", routes);

app.get('/', (req, res) => {
    res.get(flights)

})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});