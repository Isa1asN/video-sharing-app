import jwt from 'jsonwebtoken'

export const verifyUserToken = async (req, res, next) => {
    try {
        let token = req.headers.authorization;
        if (!token) {res.status(401).send("Access Denied")}

        token = token.split(' ')[1]
        if(!token || token===null){res.status(401).send("unauthorized request")}

        let verified = jwt.verify(token, process.env.jwtsecret)
        if(!verified) {res.status(401).send("unauthorized request")}

        req.user = verified
        next()
    } catch (error) {
        console.log(error)
        res.status(400).send("Invalid Token");
    }
    
}