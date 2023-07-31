const path = require("path"); //module core de node.js

module.exports = {
  dbUrl:
    "mongodb://gin:shinso@ac-wmzxzzo-shard-00-00.seixkun.mongodb.net:27017,ac-wmzxzzo-shard-00-01.seixkun.mongodb.net:27017,ac-wmzxzzo-shard-00-02.seixkun.mongodb.net:27017/twitter?ssl=true&replicaSet=atlas-vkyqdd-shard-0&authSource=admin&retryWrites=true&w=majority",
  cert: "/etc/letsencrypt/live/www.shinso-projects.site/fullchain.pem",
  key: "/etc/letsencrypt/live/www.shinso-projects.site/privkey.pem",
  portHttp: 80,
  portHttps: 443,
};
