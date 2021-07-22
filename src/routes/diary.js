const { Router } = require("express")
const router = Router()

const diaryController = require("../controllers/diary")

router.get("/", diaryController.getAll)
router.get("/:id", diaryController.getById)
router.post("/", diaryController.create)
router.put("/:id", diaryController.updateById)
router.delete("/:id", diaryController.deleteById)

module.exports = router
