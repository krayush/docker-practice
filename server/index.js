const express = require("express");
const app = express();
const { createConnection, client } = require("./redis");

// app.use(express.static('public'));

// app.get("/", (_, res) => {
//     res.sendfile(__dirname + '/public/index.html');
// });

app.get("/count", (_req, res) => {
    client.get("visitorCount", (_err, reply) => {
        const count = +(reply || 0) + 1;
        client.set("visitorCount", count);
        res.send(`HI THERE YOU GO!!! - ${count}`);
    });
});

createConnection().then(() => {
    app.listen(8000, () => {
        console.log("Listening on port 8000");
    });
}).catch(e => {
    console.log(e);
});