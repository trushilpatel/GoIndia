const { usersModel } = require("../../db/sequelize")

async function incrementUserCount(req, res) {
	console.log("increment User Count")
	res.send("DONE")
}

async function getAllUsers(req, res) {
	console.log("GET ALL USERS")
	res.json(await usersModel.findAll())
}

async function saveUser(req, res) {
	console.log("SAVE USER")
	console.log(req.ip)
	console.log("CREATING NEW USER : ", req.body)
	try {
		await usersModel.build(req.body).save()
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
