const mongoose = require("mongoose");
const env = require(`../environment/${process.env.NODE_ENV}`);
exports.clientPromise = mongoose
  .connect(env.dbUrl, {})
  .then((client) => {
    console.log("connexion db twitter ok mode=client export!");
    return client;
  })
  .catch((err) => {
    console.log("erreur connect db twitter is :", err);
  });
