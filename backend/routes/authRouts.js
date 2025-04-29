const  {Signup, Login}  = require("../controllers/AuthControllers");
const {userVerification} = require("../Middlewares/AuthMiddleWare")
const router = require("express").Router();

router.post("/signup", Signup);
router.post('/',userVerification)
router.post("/login", Login);


module.exports = router;