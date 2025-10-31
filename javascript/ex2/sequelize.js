import { Sequelize } from 'sequelize';

const postgres = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres

const UserEntity = postgres.define("User", {
    email: DataTypes.STRING,
});

const WishEntity = postgres.define("Wish", {
    title: DataTypes.STRING,
    quantity: DataTypes.NUMBER,
});

UserEntity.findAll();
