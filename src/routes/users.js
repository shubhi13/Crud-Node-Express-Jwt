const { Router } = require("express")
const router = Router()

const userController = require("../controllers/users")

router.post("/", userController.authenticate)

module.exports = router
