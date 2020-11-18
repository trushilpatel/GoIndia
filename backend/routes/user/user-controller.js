const { Users } = require("../../db/sequelize")

async function saveUser(req, res) {
	try {
		await Users.build(req.body).save()
		res.send("DONE")
	} catch (err) {
		res.send("UPDATED")
	}
}

module.exports = {
	saveUser,
}
