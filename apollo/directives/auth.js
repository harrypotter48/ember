import {
  SchemaDirectiveVisitor,
  AuthenticationError,
} from "apollo-server-micro";
import { defaultFieldResolver } from "graphql";
// import { User } from "../../models";
// import to from 'await-to-js';

export class IsAuthUser extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field; //This is confusing javascript syntax here is a link that describes what is going on: https://javascript.info/destructuring-assignment
    field.resolve = async function (...args) {
      // let authUser, user;
      // [user, {}, {authUser}] = args;
      // console.log('run');
      // if ((authUser && authUser.id === user.id) || user.login) {
      //   const result = await resolve.apply(this, args);
      //   return result;
      // } else {
      throw new Error(
        "You must be the authenticated user to get this information"
      );
      // }
    };
  }
}

export class IsAuth extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field;
    field.resolve = async function (...args) {
      // console.log(args);
      // const [, , ctx] = args;
      // console.log(ctx);
      const [, , ctx] = args;
      if (!ctx.me) {
        throw new AuthenticationError(
          "You must be signed in to view this resource."
        );
      } else {
        const result = await resolve.apply(this, args);
        return result;
      }
      // let userInfo;
      // [, {}, {user: userInfo}] = args;
      // console.log(user);
      // console.log(userInfo);
      // if(!userInfo){
      //   throw new Error('User not authenticated');
      // }

      // let err, authUser;
      // [err, authUser] = await to(User.findOne({where: {id: userInfo.id}}));
      // if(!authUser){
      //  throw new Error('JWT token received, User not found, and not authenticated');
      // }

      // args[2].authUser = authUser;
      // return resolve.apply(this, args);
    };
  }
}
