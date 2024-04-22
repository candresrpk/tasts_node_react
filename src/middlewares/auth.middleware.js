import jwt from 'jsonwebtoken'

export const isAuth = (req, res, next) => {
    const token = req.cookies.token
    if (!token) {
        return res.status(401).json({
            message: 'No estas preparado'
        })
    }

    jwt.verify(token, 'secret-key', (err, decode) => {
        if(err){
            return res.status(401).json({
                message: "No estais preparados"
            })
        }
        req.userId = decode.id
        next()
    })
}