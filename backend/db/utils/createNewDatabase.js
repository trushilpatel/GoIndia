require("dotenv").config({ path: "../../.env" })
const sequelize = require("../sequelize")

async function createNewDatabase() {
	console.log(":::::CREATING NEW DATABASE:::::")
	await Promise.all(
		Object.keys(sequelize).map((modelName) =>
			sequelize[modelName].sync({ force: true })
		)
	)
	console.log(":::::SUCCESSFULLY CREATED NEW DATABASE:::::")
}

createNewDatabase()
