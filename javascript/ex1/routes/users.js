import { createUser, getAllUsers, getUser, updateUser, deleteUser } from '../controllers/user.js';
import {router, router2, UserController} from '../controllers/userController.js';

// CRUD
router2.post('/v1/users/', createUser);
router.post('/v1/users/', createUser);
router.get('/v1/users', getAllUsers);
router.get('/v1/users/:id', getUser);
router.put('/v1/users/:id', updateUser);
router.delete('/v1/users/:id', deleteUser);

const userController = new UserController();

router.post('/v2/users', userController.createUser.bind(userController));
router.get('/v2/users', userController.getAllUsers.bind(userController));
router.get('/v2/users/:id', userController.getUser.bind(userController));
router.put('/v2/users/:id', userController.updateUser.bind(userController));
router.delete('/v2/users/:id', userController.deleteUser.bind(userController));
