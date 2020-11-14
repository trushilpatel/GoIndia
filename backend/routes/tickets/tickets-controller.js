const { Tickets } = require("../../db/sequelize")

let totalTickets = 0

async function getRandomTicket(req, res) {
	if (totalTickets === 0) {
		totalTickets = await getNumberOfTotalTickets()
		console.log("TOTAL TICKETS", totalTickets)
	}
	res.json(
		await Tickets.findOne({
			where: {
				id: Math.floor(Math.random() * totalTickets),
			},
		})
	)
}

async function saveTicket(req, res) {
	console.log("SAVE TICKET", req.body)
	try {
		await Tickets.build(req.body).save()
		totalTickets++
		console.log("TOTAL TICKETS", totalTickets)
    res.send("DONE")
	} catch (err) {
		res.send("ERROR")
	}
}

async function getNumberOfTotalTickets() {
	return await Tickets.count()
}
module.exports = {
	getRandomTicket,
	saveTicket,
}
