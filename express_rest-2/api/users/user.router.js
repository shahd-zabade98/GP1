const { createUser, loginUser,getid,insertpage,addlocation,pagefetch,changebool} = require ("./user.controller");

const router = require ("express").Router();
//const {checkToken} = require("../../auth/token_validation");
router.post("/signup", createUser);
router.post("/login", loginUser);
router.post("/getid", getid);
router.post("/insertpage", insertpage);
router.post("/addlocation", addlocation);
router.post("/pagefetch", pagefetch);
router.post("/changebool", changebool);
module.exports = router;



