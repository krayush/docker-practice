const express = require("express");
const app = express();
const { createConnection, client } = require("./redis");

app.get("/", (_req, res) => {
    client.get("visitorCount", (_err, reply) => {
        const count = +(reply || 0) + 1;
        // if (count > 10) {
            // process.exit(-1);
        // }
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