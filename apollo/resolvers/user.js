import jwt from "jsonwebtoken";
import { AuthenticationError } from "apollo-server-micro";
import { sql } from "sql-wizard";
const { sqlFind, sqlCreate, sqlUpdate, sqlDelete } = sql;

const createToken = async (user, secret, expiresIn) => {
  const { id, email, username, role } = user;
  return await jwt.sign({ id, email, username, role }, secret, {
    expiresIn,
  });
};

export default (db) => {
  return {
    Query: {
      users: async (parent, args, ctx) => {
        const rows = await sqlFind(db, "usuario", args);
        return rows;
      },
      user: async (parent, args, ctx) => {
        const rows = await sqlFind(db, "usuario", args);
        if (rows.length === 0) {
          return null;
        }
        return rows[0];
      },
      me: async (parent, args, { models, me }) => {
        if (!me) {
          return null;
        }

        return await models.usuario.findByPk(me.id);
      },
    },

    Mutation: {
      signUp: async (
        parent,
        { usuario, password, nombre, apellidos },
        { models, secret }
      ) => {
        const user = await models.usuario.create({
          usuario,
          password,
          nombre,
          apellidos,
        });

        return { token: createToken(user, secret, "30m") };
      },

      signIn: async (parent, { login, password }, { models, secret }) => {
        const rows = await sqlFind(db, "usuario", { usuario: login });
        console.log(rows);

        if (rows.length === 0) {
          throw new UserInputError(
            "No user found with this login credentials."
          );
        }
        const user = rows[0];

        const isValid =
          /*await user.validatePassword(password);*/ user.password === password;

        if (!isValid) {
          throw new AuthenticationError("Invalid password.");
        }

        return { token: createToken(user, "1qazxsw23edc", "30m") };
      },
    },
  };
};
