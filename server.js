
const express = require("express");
const app = express();
app.use(express.static("dist"));
// app.use(express.static("src"));
app.get("/", function(request, response){
    response.sendFile("index.html", { root: __dirname });
});

app.listen(3000);
