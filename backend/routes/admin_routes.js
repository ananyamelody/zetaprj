let express=require('express');
let router=express.Router();

router.get("/viewstaff",(req,res)=>{
    res.send("view staff route called");
})

router.get("/viewstudents",(req,res)=>{
    res.send("view students route called");
})

router.get("/viewreport",(req,res)=>{
    res.send("view report route called");
})

router.put("/freezestaff/:id", (req, res) => {
    res.send("Freeze staff route called");
});

router.put("/freezestudent/:id", (req, res) => {
    res.send("Freeze student route called");
});

router.delete("/deletestaff/:id",(req,res)=>{
    res.send("Delete Staff route called")
})


module.exports = router;