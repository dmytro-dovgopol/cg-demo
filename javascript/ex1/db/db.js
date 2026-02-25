import { Sequelize } from 'sequelize';

//export const PsqlSequelizeConn = new Sequelize('postgres://user:pass@example.com:5432/dbname')

const PsqlSequelizeConn = new Sequelize('postgres://user:pass@example.com:5432/dbname');

export default PsqlSequelizeConn;