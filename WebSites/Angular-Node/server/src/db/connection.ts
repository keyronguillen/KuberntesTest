import { Sequelize } from "sequelize";


const sequelize = new Sequelize('rrhh', 'root', 'SeverusSnape96$', {
    host: 'localhost',
    dialect: 'mysql',   
});

export default sequelize;