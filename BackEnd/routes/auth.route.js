//express
const express = require("express")
//router
const router = express.Router()
// controller
const {login} = require("../controllers/authAdmin.controller")
//method request
router.post("/login", login)

module.exports = router