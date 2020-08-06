import {
  GraphQLID,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';

import models from '../../../models';
import Usuario from '../../types/usuario';

export default {
    type: Usuario,
    args: {
    },
    async resolve(root, args, { usuarioActual }) {
      if(!usuarioActual) return null;

      const usuario = await models.usuario.findOne({ where: {usuario: usuarioActual.uid} } );

      return usuario;
    }
};