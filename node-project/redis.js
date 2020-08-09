const redis = require("redis");
const client = redis.createClient({
    host: "redis-server",
    // port: 5000,
    password: 'ayushwalia'
});

const createConnection = () => {
    return new Promise((resolve, reject) => {
        client.on("connect", function () {
            resolve();
        }).on("error", function (error) {
            console.error(error);
            reject(error);
        });
    });
};

module.exports = {
    createConnection,
    client
};

