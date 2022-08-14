import pkg from "sequelize";

const {Sequelize} = pkg

const sequelize = new Sequelize('hospital', 'root', null, {
    host: 'localhost',
    dialect: 'mysql'
})

export const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

