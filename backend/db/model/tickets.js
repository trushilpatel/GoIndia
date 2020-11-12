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
			type: DataTypes.STRING,
			allowNull: false,
			field: "ticket",
		},
	},
	options: {
		tableName: "tickets",
		freezeTableName: true,
		timestamps: true,
	},
}
