const DataTypes = require("sequelize").DataTypes

module.exports = {
	modelName: "Tickets",
	attributes: {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: "id",
		},
		ticket: {
			type: DataTypes.STRING(30),
			allowNull: false,
			unique: true,
			field: "ticket",
		},
	},
	options: {
		tableName: "tickets",
		freezeTableName: true,
		timestamps: true,
	},
}
