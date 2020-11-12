const DataTypes = require("sequelize").DataTypes

module.exports = {
	modelName: "Users",
	attributes: {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: "id",
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			field: "email",
		},
	},
	options: {
		tableName: "users",
		freezeTableName: true,
		timestamps: true,
	},
}
