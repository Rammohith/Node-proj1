import express from "express";
const app = express()
const port = 3000

app.get("/", (req, res) => {
    const d = new Date();
    const today = d.getDay();
    // console.log("Today's full date:", d.toDateString());
    let Type, Adv
    if (today === 0 || today === 6){
        Type = "Week end";
        Adv = "Lets enjoyy"
    }
    else{
        Type = "Weekday";
        Adv = "Workhard"
    }
    res.render("index.ejs" ,{
        dayType: Type,
        advice: Adv,
    });
    })



app.listen(port, () => {
    console.log(`Server running on port ${port} `)
}) 