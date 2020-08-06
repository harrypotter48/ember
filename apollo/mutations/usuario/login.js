import { GraphQLNonNull } from 'graphql';
import jwt from 'jsonwebtoken';
import models from '../../../models';
import LoginInput from '../../inputs/login';
import Token from './../../types/token';
import { SECRETO } from './../../../util';
import { AuthenticationError } from 'apollo-server-core';


const createToken = ( usuario, secreto, expiresIn) => {
    return jwt.sign( { uid: usuario}, secreto, { expiresIn});
}

export default {
    type: Token,
    args: {
        loginData: {
            type: new GraphQLNonNull(LoginInput)
        }
    },
    async resolve (source, args) {   
			const { usuario, password } = args.loginData;
			let username = await models.usuario.findOne( {where: {usuario}} );
			
			if( !username) {
				throw new AuthenticationError('Usuario no encontrado');
			}

			const passwordCorrecto = ( password == username.password) ? true : false;

			if( passwordCorrecto ) {
				return { 
						token: createToken( args.loginData.usuario, SECRETO, "1Hr" )
				}
			} else {
				throw new AuthenticationError( 'Usuario o password incorrecto' );
			}      
    }
};
