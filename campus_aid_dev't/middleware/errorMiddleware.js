// declare error handler function
const errorHandler  = (error, req, res, next) => {
    // get the status of the error using the ternary operation
    const statusCode = res.statusCode ? res.statusCode : 500;

    // set the status on the response object
    res.status(statusCode);

    // return json response with the error message and stack if the node environment is not ptoduction
    res.json ({
        message: error.message,
        stack: process.env.NODE_ENV === 'production'? null : error.stack
    });
};

// export error handler middleware
module.exports = errorHandler;