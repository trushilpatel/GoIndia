require("dotenv").config({ path: "../../.env" })
const sequelize = require("../sequelize")
const claimedTickets = require("./data/claimedTickets")
const unclaimedTickets = require("./data/unclaimedTickets")

async function saveToDB() {
	console.log(":::::Saving Data To Database:::::")
	await saveTickets()
	console.log(":::::Successfully saved:::::")
}

async function saveTickets() {
	await Promise.all(
		claimedTickets.map((ticket) =>
			sequelize.ticketsModel.build({ ticket }).save()
		)
	)
	await Promise.all(
		unclaimedTickets.map((ticket) =>
			sequelize.ticketsModel.build({ ticket }).save()
		)
	)
}

// execute function
saveToDB()
