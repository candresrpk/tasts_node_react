import AuthService from '../services/auth.service.js'

const service = new AuthService()

export const signin = async (req, res, next) => {
    try {
        const signin = await service.signin()
        res.status(200).json(signin)
    } catch (error) {
        next(error)
    }
}

export const signup = async (req, res, next) => {
    try {
        const signup = await service.signup()
        res.status(200).json(signup)
    } catch (error) {
        next(error)
    }
}

export const signout = async (req, res, next) => {
    try {
        const signout = await service.signout()
        res.status(200).json(signout)
    } catch (error) {
        next(error)
    }
}

export const profile = async (req, res, next) => {
    try {
        const profile = await service.profile()
        res.status(200).json(profile)
    } catch (error) {
        next(error)
    }
}