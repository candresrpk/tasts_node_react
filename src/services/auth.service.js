import boom  from "@hapi/boom";
import bcrypt from 'bcrypt'

import sequelize from "../libs/sequelize.js";

const models = sequelize.models


class AuthService {
    constructor(){

    }


    async signin(username, password) {

        const user = await models.Auth.findOne({where: {username: username}})
        
        if(!user){
            throw boom.badData(`username not found :c`)
        }

        const validPassword = await bcrypt.compare(password, user.password)
        if(!validPassword){
            throw boom.badData(`ups wrong password :c`)
        } else{
            return {
                'user': user,
                'id': user.id
    
            }
        }
    }

    async signup(data) {
        try {

            const hashedPassword = await bcrypt.hash(data.password, 10)
            data.password = hashedPassword
            const newUser = await models.Auth.create(data)
            const username = newUser.username

            return {
                'message': `${username} was successfully created`,
                'id': newUser.id
            }
        } catch (error) {
            console.log(error)
            throw boom.badData(`username or email already taken`)
        }
    }

    async profile(id) {
        const profile = await models.Auth.findByPk(id=id)
        console.log(profile)
        return {
            'data': profile
        }
    }

}


export default AuthService