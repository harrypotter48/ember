/* jshint indent: 1 */
// import bcrypt from 'bcrypt';

module.exports = function (sequelize, DataTypes) {
  var usuario = sequelize.define(
    "usuario",
    {
      id: {
        type: DataTypes.INTEGER(),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: { type: DataTypes.STRING(23), allowNull: false },
      apellidos: { type: DataTypes.STRING(23), allowNull: false },
      usuario: { type: DataTypes.STRING(255), allowNull: false },
      password: { type: DataTypes.STRING(255), allowNull: false },
      unidad_id: { type: DataTypes.INTEGER(), allowNull: true },
    },
    {
      tableName: "usuario",
    }
  );
  usuario.findByLogin = async (login) => {
    let user = await usuario.findOne({
      where: { usuario: login },
    });

    return user;
  };

  // usuario.beforeCreate(async user => {
  //   user.password = await usuario.generatePasswordHash();
  // });

  // usuario.prototype.generatePasswordHash = async function() {
  //   const saltRounds = 10;
  //   return await bcrypt.hash(this.password, saltRounds);
  // };

  // usuario.prototype.validatePassword = async function(password) {
  //   return await bcrypt.compare(password, this.password);
  // };
  return usuario;
};
