const redis = require("redis");
const client = redis.createClient({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD
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

