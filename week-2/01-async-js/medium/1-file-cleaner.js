const fs = require("fs");

fs.readFile("a.txt", "utf-8", function(err, data){
    data = data.replace(/\s+/g, " ");
    console.log(data);
})