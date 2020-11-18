require("dotenv").config({ path: "../../.env" })
const { Tickets } = require("../sequelize")
const claimedTickets = require("./data/claimedTickets")
const unclaimedTickets = require("./data/unclaimedTickets")

async function saveToDB() {
	console.log(":::::Saving Data To Database:::::")
	await saveTickets()
	console.log(":::::Successfully saved:::::")
}

async function saveTickets() {
	let tickets = new Set()
	claimedTickets.forEach((ticket) => tickets.add(ticket))
	unclaimedTickets.forEach((ticket) => tickets.add(ticket))
	tickets = [...tickets]
	await Promise.all(tickets.map((ticket) => Tickets.build({ ticket }).save()))
}

// execute function
saveToDB()
