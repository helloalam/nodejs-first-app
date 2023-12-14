import express from "express";
import path from "path";
// import express from "path";

const app= express();
app.set("view engine","ejs");

app.use(express.static(path.join(path.resolve(),"public")));


app.get("/", (req,res) =>{
    const pathlocation=path.resolve();
    // console.log(path.join(pathlocation,"./index.html"));
    // res.sendFile(path.join(pathlocation,"./index.html"));
    res.render("index",{name:"Mahfooz Alam"})

     
});

app.listen(5000, ()=>{
    console.log("Server is working")
});