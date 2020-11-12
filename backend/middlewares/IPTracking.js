const { TrackIPs } = require("../db/sequelize")

async function IPTracking(req, res, next) {
	const ip = await TrackIPs.findOne({ where: { ip: req.ip } })
	if (ip) {
		ip.visits++
		ip.save()
	} else {
		await TrackIPs.build({ ip: req.ip }).save()
	}
	next()
}

module.exports = {
	IPTracking,
}
