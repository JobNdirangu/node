const Express=require('express')
const app = Express()
app.get('/', (req,res)=>{
    res.send("Landing page")
})
app.get('/second', (req,res)=>{
    res.send("second page")
})
app.listen(3000,()=>{
    console.log("sever running")
})