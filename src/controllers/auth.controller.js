import AuthService from '../services/auth.service.js'
import {createAccessToken} from '../libs/jwt.js'


const service = new AuthService()

export const signin = async (req, res, next) => {
    try {

        const {username, password} = req.body

        const {user, id} = await service.signin(username, password)
        const token = await createAccessToken({id:id})
        res.cookie('token', token, {
            httpOnly: true,
            sameSite: 'none',
            maxAge: 24 * 60 * 60 * 1000
        })
        res.status(200).json(user)
    } catch (error) {
        next(error)
    }
}

export const signup = async (req, res, next) => {
    try {
        const data = req.body
        const signup = await service.signup(data)
        console.log(signup.id)
        const token = await createAccessToken({id:signup.id})

        res.cookie('token', token, {
            httpOnly: true,
            sameSite: 'none',
            maxAge: 24 * 60 * 60 * 1000
        })

        res.status(200).json(signup)
    } catch (error) {
        next(error)
    }
}

export const signout = async (req, res, next) => {
    try {
        res.clearCookie('token')
        res.status(200).json({'message':'logout successfully'})
    } catch (error) {
        next(error)
    }
}

export const profile = async (req, res, next) => {
    try {
        const id = req.userId
        const profile = await service.profile(id)
        res.status(200).json(profile)
    } catch (error) {
        next(error)
    }
}