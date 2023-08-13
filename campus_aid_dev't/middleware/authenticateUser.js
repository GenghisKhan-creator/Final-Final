const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')

const authenticateUser = asyncHandler(async(req, res, next) => {

    let token 

    if(req.cookies.jwt){
        try {
            token = req.cookies.jwt;

            let decode = await jwt.verify(token);

            req.user = decode;

            next()
        } catch (error) {
            res.status(401);
            throw new Error('Unauthorised accessed!');
        }
    }else{
        res.status(400);
        throw new Error('Invalid token');
    }

})


module.exports = authenticateUser;