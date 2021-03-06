const express = require("express")
const userControllers = require("./users.controllers")

const router = express.Router()

router.post("/", userControllers.registerUser)
router.get("/", userControllers.getUsers)
router.delete("/:_id", userControllers.deleteUserById)
router.post("/login", userControllers.loginUser)
router.put("/", userControllers.updateUserById)

module.exports = router
