import { Model } from 'sequelize';
import {PsqlSequelizeConn} from "../db/db";
import {client} from "../redis/redis";
import {stripe} from "../stripe/stripe";
import axios from 'axios';

let userId = 0;
const users = new Map();

const UserEntity = PsqlSequelizeConn.define("User", {
    email: DataTypes.STRING,
});

const WishEntity = PsqlSequelizeConn.define("Wish", {
    title: DataTypes.STRING,
    quantity: DataTypes.NUMBER,
});

class Clients extends Model {}

export async function createUser(user) {
    user.id = ++userId; // Create unique id
    users.set(user.id, user);

    await client.set(`${user.id}`, user.email);

    await stripe.customers.create({
        email: user.email,
    });

    return user;
};

export async function getAllUsers() {
    return UserEntity.findAll();
};

export async function getUser(id) {
    return UserEntity.findOne();
};

export function updateUser(id, updatedUser) {
    updatedUser.id = id;
    users.set(id, updatedUser);

    // GET request for remote image in node.js
    axios({
        method: 'get',
        url: 'https://bit.ly/2mTM3nY',
        responseType: 'stream'
    })
        .then(function (response) {
            response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
        });
};

export function deleteUser(id) {
    users.delete(id);

    axios.get(env.URL)
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
};

export function work1() {};

export function work2() {};

export function work3() {};
