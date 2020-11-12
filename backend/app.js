require("dotenv").config()
const bodyParser = require("body-parser")
const express = require("express")
const cors = require("cors")
const { IPTracking } = require("./middlewares/IPTracking")
const app = express()
const NODE_ENV = process.env.NODE_ENV
const PORT =
	NODE_ENV === "PRODUCTION" ? process.env.PROD_PORT : process.env.DEV_PORT
const BASE_ADDRESS =
	NODE_ENV === "PRODUCTION" ? process.env.PROD_BASE_ADDRESS : process.env.DEV_BASE_ADDRESS
const ticketsRoutes = require("./routes/tickets/tickets-routes")
const usersRoutes = require("./routes/user/user-routes")

app.use(bodyParser.json())
app.use(express.static("../frontend/dist"))

app.use("/api/user", IPTracking, usersRoutes)
app.use("/api/ticket", IPTracking, ticketsRoutes)

app.get("*", (req, res) => {
	res.send("ERROR: 404")
})

app.listen(PORT, () => {
	console.log(`::::: NODE_ENV ${process.env.NODE_ENV} :::::`)
	console.log(`::::: Server is listening on ${BASE_ADDRESS} :::::`)
})
