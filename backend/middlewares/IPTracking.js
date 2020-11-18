const { TrackIPs } = require("../db/sequelize")

async function websiteHits(req, res, next) {
	const ip = await TrackIPs.findOne({ where: { ip: req.ip } })
	if (ip) {
		ip.websiteHits++
		ip.save()
	} else {
		await TrackIPs.build({ ip: req.ip }).save()
	}

	next()
}

async function apiHits(req, res, next) {
	console.log(req.ip)
	const ip = await TrackIPs.findOne({ where: { ip: req.ip } })
	if (ip) {
		ip.apiHits++
		ip.save()
	} else {
		await TrackIPs.build({ ip: req.ip, apiHits: 1 }).save()
	}
	next()
}

module.exports = {
	websiteHits,
	apiHits,
}
