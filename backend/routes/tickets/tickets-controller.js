const { Tickets } = require("../../db/sequelize")

async function getRandomTicket(req, res) {
	res.json(
		await Tickets.findOne({
			where: {
				id: Math.floor(Math.random() * Tickets.count()),
			},
		})
	)
}

async function saveTicket(req, res) {
	try {
		await Tickets.build(req.body).save()
		res.send("DONE")
	} catch (err) {
		res.send("ERROR")
	}
}

module.exports = {
	getRandomTicket,
	saveTicket,
}
