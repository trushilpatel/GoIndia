var bodyParser = require("body-parser")
const express = require("express")
require("dotenv").config()
const cors = require("cors")

const app = express()

const ticketsRoutes = require("./routes/tickets/tickets-routes")
const usersRoutes = require("./routes/user/user-routes")


app.use(bodyParser.json())

app.use(express.static('../frontend/dist'))
app.use("/api/user", usersRoutes)
app.use("/api/ticket", ticketsRoutes)
app.get("*", (req, res) => {
	res.send("ERROR: 404")
})

app.listen(process.env.PORT, () => {
	console.log(`Server is listening on ${process.env.FRONTEND} ${process.env.PORT}`)
})
