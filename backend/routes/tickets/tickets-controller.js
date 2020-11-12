const { ticketsModel } = require("../../db/sequelize")

let totalTickets = 0

async function getRandomTicket(req, res) {
	if (totalTickets === 0) {
		totalTickets = await getNumberOfTotalTickets()
		console.log("TOTAL TICKETS", totalTickets)
	}
	console.log("GET ALL TICKETS")
	res.json(
		await ticketsModel.findOne({
			where: {
				id: Math.floor(Math.random() * totalTickets),
			},
		})
	)
}

async function saveTicket(req, res) {
	console.log("SAVE TICKET", req.body)
	try {
		await ticketsModel.build(req.body).save()
		totalTickets++
		console.log("TOTAL TICKETS", totalTickets)
	} catch (err) {
		res.send("ERROR")
	}
	res.send("DONE")
}

async function getNumberOfTotalTickets() {
	return await ticketsModel.count()
}
module.exports = {
	getRandomTicket,
	saveTicket,
}
