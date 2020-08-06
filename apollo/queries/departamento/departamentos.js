import {
    GraphQLList,
    GraphQLID,
    GraphQLInt,
  } from 'graphql';
  
  import models from '../../../models/index.js';
  import Departamento from '../../types/departamento.js';
  
  export default {
    type: new GraphQLList(Departamento),
    args: {      
      first: {
        type: GraphQLInt,
        description: 'Limits the number of results returned in the page. Defaults to 10.',
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
      return models.departamento.findAll({where: args, offset, limit });
    }
  };
  