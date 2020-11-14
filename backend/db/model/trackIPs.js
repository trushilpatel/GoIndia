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
		websiteHits: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 1,
			field: "websitehits",
		},
		apiHits: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0,
			field: "apihits",
		},
	},
	options: {
		tableName: "trackips",
		freezeTableName: true,
		timestamps: true,
	},
}
