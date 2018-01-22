var logger = require("../../config/log.js");

// Error handling middleware

var errorHandler = function(err, req, res, next) {

    "use strict";

	logger.log("error", err);
    res.status(500);
    res.render("error-template", {
        error: err
    });
};

exports.errorHandler = errorHandler;
