app.get('/',(req,res)=>{
    try{
        throw new error("Something went wrong");
    }catch(error){
        res.status(500).json({success:false, messsage:"Something went wrong"});
    }
})

app.get("/age-check/:age",(req,res)=>{
    let age = req.params.age;
    try{
        if(age<18){
            throw new Error("you are not eligible to vote");
        }else{
            res.send("you are eligible to vote");
        }
    }catch(error){
        //res.status(500).json({success:false, message:"Age is less than 18"})
    }
})
app.use((err,req,res,next)=>{
    res.status(500).json({success:false, messsage:err.message});
})

app.use((req,res)=>{
    res.status(404).json({success:false, message:"Page not found"});
})


app.listen(PORT, ())