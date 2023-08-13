
const jwt = require('jsonwebtoken')

const authenticateUser =  async(req, res, next) => {
    let jwtToken = req.cookies.jwt

    try{
        let decoded = await jwt.verify(jwtToken, process.env.JWT_SECRET);
        
        if(decoded){
            console.log('jwt.verify');
            next()
        }else{
            res.status(401);
            throw new Error('Invalid Token, Access denied');
        }
        
    }catch(error){
        res.json({
            error
        });
    };

};


module.exports = authenticateUser