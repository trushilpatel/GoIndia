require("dotenv").config({ path: "./.adminEnv" })
const express = require("express")
const app = express()
const os = require("os")
const PORT = process.env.PORT
const SECRET_KEY = process.env.SECRET_KEY
const { TrackIPs } = require("./db/sequelize")

app.get(`/${SECRET_KEY}/statistics`, async function (req, res) {
	const statistics = {}

	statistics.UNIQUE_IPS = await TrackIPs.count()
	statistics.TOTAL_WEBSITE_HITS = await TrackIPs.sum("websiteHits")
	statistics.TOTAL_API_HITS = await TrackIPs.sum("apiHits")

	res.json(statistics)
})

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`)
	console.log(`You can check analytics on using IP/${SECRET_KEY}/statistics`)
})
