
const app = require("./index")

const connect = require("./configs/db")
const port = process.env.port || 5500

app.listen(port,async()=>{

   try{
       await connect()
       console.log(`Listining on port ${port}`)
   }catch(err){
       console.log(err)
   }
})