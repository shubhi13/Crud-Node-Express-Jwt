const { Router } = require("express")
const router = Router()
const diary = require("./diary")
const users = require("./users")
const welcome = require("./welcome")
const { validateUser } = require("../middleware/users")

// public route
router.use("/", welcome)
router.use("/login", users)

// private route
router.use("/diary", validateUser, diary)

module.exports = router
