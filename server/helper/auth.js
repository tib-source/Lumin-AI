const jwt = require("jsonwebtoken");

// JSON web token configuration 

function generateToken(data) {
    return jwt.sign(JSON.stringify(data), process.env.TOKEN_SECRET)
}


function authJWT(req, res, next) {
    try {
        const authHeader = req.headers["x-access-token"];
        if (authHeader) {
            const token = authHeader.split(" ")[1]

            jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
                if (err) {
                    return res.status(403)
                }

                req.user = user;
                next();
            })

        } else {
            console.log("meo")
            res.status(401).json({ error: "Invalid autherisation" })
        }
    } catch (e) {
        console.log(e)
    }

}

module.exports = { generateToken, authJWT }