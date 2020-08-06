import { GraphQLList, GraphQLInt, } from 'graphql';
  
import models from '../../../models/index';
import Unidad from '../../types/unidad';
  
  export default {
    type: new GraphQLList(Unidad),
    args: {      
      first: {
        type: GraphQLInt,
        description: 'Limita el numero de resultados retornados por pagina. Defaults to 10.',
      },
      offset: {
        type: GraphQLInt,
        description: 'A partir de que valor se empieza a incluir en la respuesta.'
      },
    },
    resolve(root, args) {
      const offset = args.offset || 0;
      const limit = args.first || 10;
      delete args.offset;
      delete args.first;
      return models.unidad.findAll({where: args, offset, limit });
    }
  };
  