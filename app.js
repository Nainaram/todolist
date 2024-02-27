    const express = require("express");
    const bodyparser = require("body-parser");
    const app = express();
    // set the  view engine to ejs;
   
    var items =["but food","eat food","eat more food"];
    var workitems = [];
    app.set("view engine",'ejs');
    app.use(bodyparser.urlencoded({extended:true}))
    app.use(express.static("public"));
     app.get("/",function(req,res){
        var today = new Date();
        var options = {
            weekday:"long",
            day:"numeric",
            month:"long"
        };
        var day = today.toLocaleDateString("en-US",options);
        res.render("list",{ListTitle: day, newListItems: items});

        
     });
     app.post("/",function(req,res){
        let item = req.body.newItem;

        if(req.body.list ==="Work")
        {
        workitems.push(item);
        res.redirect("/work");
        }
        else{
            items.push(item);
            res.redirect("/");
        }

        
     });
     app.get("/work",function(req,res){
        res.render("list" ,{ListTitle:"Work List",newListItems :workitems})
     });
   app.get("/about",function(req,res){
    res.render("about")
   })

     app.listen(3000,function(){
        console.log("server is running on port 3000")
     })