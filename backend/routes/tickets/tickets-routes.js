const express = require("express")
const router = express.Router()
const ticketsController = require("./tickets-controller")

router.get("", ticketsController.getRandomTicket)
router.post("", ticketsController.saveTicket)

module.exports = router
