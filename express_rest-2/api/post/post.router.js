const { UserPost , UpdatePost, DeletePost } = require ("./post.controller");
const checkAuthMiddleware = require("../../middleware/check-auth");
const router = require ("express").Router();

router.post("/saveposts",checkAuthMiddleware.checkAuth, UserPost);
router.put("/",checkAuthMiddleware.checkAuth, UpdatePost);
router.delete("/deletepost",checkAuthMiddleware.checkAuth, DeletePost);

module.exports = router;
