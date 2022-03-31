const express =  require("express")

const Data = require("../models/data.model")


const router = express.Router();

router.post("/", async(req,res)=>{

    try{
        const data =await Data.create(req.body)
         return res.send(data)
    }
    catch(e)
    {
        console.log(e)
    }
})

router.get("/", async(req,res)=>{

    try{
        const data =await Data.find({})
         return res.send(data)
    }
    catch(e)
    {
        console.log(e)
    }
})

module.exports = router