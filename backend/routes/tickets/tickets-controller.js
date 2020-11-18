const { Tickets } = require("../../db/sequelize")

async function getRandomTicket(req, res) {
	res.json(
		await Tickets.findOne({
			attributes: ["ticket"],
			where: {
				id: Math.floor(Math.random() * (await Tickets.count())),
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
