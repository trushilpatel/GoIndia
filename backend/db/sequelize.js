const { Sequelize } = require("sequelize")
const UsersModel = require("./model/users")
const TicketsModel = require("./model/tickets")
const TrackIPsModel = require("./model/trackIPs")
const DB_NAME = process.env.DB_NAME
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD

if (!DB_NAME && !DB_PASSWORD && !DB_USER) {
	throw new Error("::::: ERROR PLEASE CONFIGURE DATABASE CREDENTIALS :::::")
}

const sequelize = new Sequelize(
	`postgres://${DB_USER}:${DB_PASSWORD}@localhost:5432/${DB_NAME}`
)

try {
	sequelize.authenticate()
	console.log("::::: INFO Successfully Connected to Database :::::")
} catch (err) {
	console.log(err)
	throw err
}

const Users = sequelize.define(
	UsersModel.modelName,
	UsersModel.attributes,
	UsersModel.options
)

const Tickets = sequelize.define(
	TicketsModel.modelName,
	TicketsModel.attributes,
	TicketsModel.options
)

const TrackIPs = sequelize.define(
	TrackIPsModel.modelName,
	TrackIPsModel.attributes,
	TrackIPsModel.options
)

module.exports = { Users, Tickets, TrackIPs }
