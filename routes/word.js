const express = require("express");
const router = express.Router();
const WordController = require("../app/controllers/WordController");
//@route POST /api/posts
//@desc Create / Edit / Delete
//@access Private

router.get("/", WordController.store);
router.post("/", WordController.create);
router.put("/:id", WordController.update);
router.delete("/:id", WordController.delete);

module.exports = router;
