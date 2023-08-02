const { generateToken } = require('../../config/jwt.config');

const loginHandler = async (req, res) => {
    try {
        if(!req.user) return res.status(400)
            .send({status: 'error', message: 'Invalid Credentials'});
    
        const accessToken = await generateToken(req.user);
        
        res.cookie('cookieToken', accessToken, {
            maxAge: 2 * 60 * 60 * 1000, // 2hs
            httpOnly: true
        });
    
        console.log(accessToken)
    
        res.status(200).send({ status: 'success', acces_token: accessToken, message: 'login success' });
        
    } catch (error) {
        console.log(error)
        res.status(500).send({ status: 'error', error });
    }
};

module.exports = {
    loginHandler
};