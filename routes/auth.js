const express =require("express");
const usercontroller = require("../controllers/users");
const router=express.Router();

router.post('/register',usercontroller.register);
module.exports=router;