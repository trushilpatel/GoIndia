const express = require("express")
const router = express.Router()
const userController = require("./user-controller")

router.get("", userController.incrementUserCount)
router.post("", userController.saveUser)  
router.get("/fetch", userController.getAllUsers)

module.exports = router
