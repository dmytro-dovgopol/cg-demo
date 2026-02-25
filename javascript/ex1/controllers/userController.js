import {work1, work2, work3, createUser, deleteUser, getAllUsers, getUser, updateUser} from "../usecases/user";
import express from 'express';

// const r = express.Router();
// const r2 = express.Router();
//
// export const router = r;
// export const router2 = r2;

export const router = express.Router();
export const router2 = express.Router();

export class UserController {
    constructor() {}

    async createUser(ctx) {
        let user = ctx.request.body;
        work1();
        work2();
        work3();
        user = createUser(user)
        ctx.status = 201;
        ctx.body = `User created with ID: ${user.id}`;
    }

    async getAllUsers(ctx) {
        return await getAllUsers();
    }

    async getUser(ctx) {
        const id = parseInt(ctx.params.id);
        return await getUser(id);
    }

    async updateUser(ctx) {
        const id = parseInt(ctx.params.id);
        const updatedUser = ctx.request.body;
        updatedUser.id = id;
        updateUser(id, updatedUser);
        ctx.body = `User ${id} updated`;
    }

    async deleteUser(ctx) {
        const id = parseInt(ctx.params.id);
        deleteUser(id);
        ctx.body = `User ${id} deleted`;
    }
}
