const { Users } = require("../../db/sequelize")

async function incrementUserCount(req, res) {
	console.log("increment User Count")
	res.send("DONE")
}

async function getAllUsers(req, res) {
	console.log("GET ALL USERS")
	//	res.json(await UsersModel.findAll())
}

async function saveUser(req, res) {
	try {
		await TrackIPsModel.build(req.body).save()
	} catch (err) {
		res.send("UPDATED")
	}
	res.send("DONE")
}

module.exports = {
	incrementUserCount,
	getAllUsers,
	saveUser,
}
