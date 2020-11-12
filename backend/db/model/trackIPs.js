const DataTypes = require("sequelize").DataTypes

module.exports = {
	modelName: "TrackIPs",
	attributes: {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: "id",
		},
		ip: {
			type: DataTypes.STRING(20),
			allowNull: false,
			unique: true,
			field: "ip",
		},
		visits: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 1,
			field: 'visits',
		},
	},
	options: {
		tableName: "trackips",
		freezeTableName: true,
		timestamps: true,
	},
}
