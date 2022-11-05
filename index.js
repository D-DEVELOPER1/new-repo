const express = require("express");
const { json } = require("express");
const flights = require("./controllers/flightController");
const models = require("./models/Flight");
const routes = require("./routes/flightRoute");

const app = express();

const value = [{
    title: "flight to canada",
    time: "1pm",
    price: 26000,
    date: "26-06-2022"
}]
app.get("/all", (req, res) => {
    res.send(value)
})
app.get("/fight/:date", (req, res) => {
    const course = value.find(c = () => c.date === parseInt(req.params.date))

    if (!course) {
        res.status(404).send("the course with the title is not found")
    } else {
        res.send(course)
    }
})
app.post("/fight/post", (req, res) => {
    const newCourse = [{
        title: req.body.title,
        time: req.body.time,
        price: req.body.price,
        date: req.body.date
    }]
    course.push(newCourse)
    req.send(course)
})
app.use(json());

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});