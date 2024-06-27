const fs = require("fs");

fs.writeFile("a.txt", "Hi I just wanted to say that I love Minnie too much >_<", function(err){
    if (err) throw err;
    console.log("Saved!");
})

fs.readFile("a.txt", "utf-8", function(err, data){
    console.log(data);
})