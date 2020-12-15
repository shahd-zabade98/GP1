const { UserComment , UpdateComment,DeleteComment  } = require ("./comment.controller");
const checkAuthMiddleware = require("../../middleware/check-auth");
const router = require ("express").Router();

router.post("/savecomments",checkAuthMiddleware.checkAuth, UserComment);
router.put("/",checkAuthMiddleware.checkAuth, UpdateComment);
router.delete("/deletecomment",checkAuthMiddleware.checkAuth, DeleteComment);

module.exports = router;