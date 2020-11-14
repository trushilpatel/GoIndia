const { Users } = require("../../db/sequelize")

async function getAllUsers(req, res) {
	console.log("GET ALL USERS")
	//	res.json(await UsersModel.findAll())
}

async function saveUser(req, res) {
	try {
		await Users.build(req.body).save()
		res.send("DONE")
	} catch (err) {
		res.send("UPDATED")
	}
}

module.exports = {
	getAllUsers,
	saveUser,
}
