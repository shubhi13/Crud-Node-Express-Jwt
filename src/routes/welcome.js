const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
  res.send({
    note: "Welcome to very basic diary entry application",
    steps: [
      "authenticate by using /login route",
      "do CRUD applications with /diary/* routes",
    ],
  })
})

module.exports = router
