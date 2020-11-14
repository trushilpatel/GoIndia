require("dotenv").config()
const bodyParser = require("body-parser")
const express = require("express")
const cors = require("cors")
const { websiteHits, apiHits } = require("./middlewares/IPTracking")
const app = express()

// routes
const ticketsRoutes = require("./routes/tickets/tickets-routes")
const usersRoutes = require("./routes/user/user-routes")

const NODE_ENV = process.env.NODE_ENV
const PORT =
	NODE_ENV === "PRODUCTION" ? process.env.PROD_PORT : process.env.DEV_PORT
const BASE_ADDRESS =
	NODE_ENV === "PRODUCTION"
		? process.env.PROD_BASE_ADDRESS
		: process.env.DEV_BASE_ADDRESS

if (NODE_ENV != "PRODUCTION") {
	console.log("::::: CORS :::::")
	app.use(cors({ origin: "http://localhost:8081" }))
}
app.use(bodyParser.json())
app.use(websiteHits, express.static("../frontend/dist"))

app.use("/api/user", apiHits, usersRoutes)
app.use("/api/ticket", apiHits, ticketsRoutes)

app.get("*", (req, res) => {
	res.send("ERROR: 404")
})

app.listen(PORT, () => {
	console.log(`::::: NODE_ENV ${process.env.NODE_ENV} :::::`)
	console.log(`::::: Server is listening on ${BASE_ADDRESS} :::::`)
})
