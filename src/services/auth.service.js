import boom  from "@hapi/boom";

class AuthService {
    constructor(){

    }


    async signin() {

        return {
            'message': 'signin'
        }
    }

    async signup() {

        return {
            'message': 'signup'
        }
    }

    async signout() {

        return {
            'message': 'signout'
        }
    }

    async profile() {

        return {
            'message': 'profile'
        }
    }

}


export default AuthService