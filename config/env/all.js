// default app configuration
module.exports = {
    port: process.env.PORT || 4000,
    db:  process.env.MONGOLAB_URI || process.env.MONGODB_URI || "mongodb://nodegoat:owasp@ds159217.mlab.com:59217/nodegoat",
    cookieSecret: "CookSec",
    cryptoKey: "1234567890abcdefghij1234567890ab",
    cryptoAlgo: "aes-256-cbc",
    hostName: "localhost"
};
