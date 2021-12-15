import express from 'express';
import UserController from '../controllers/userControllers';
import Validator from '../middlewares/validator';
import datachecker from '../middlewares/datachecker';

const userRouter =express.Router();
userRouter.post(
    '/register',
Validator.newAccountRules(),
Validator.ValidatorInput,
datachecker.isEmailExist,
UserController.createUser);
userRouter.post('/login',UserController.userLogin);
userRouter.get('/all',UserController.getAllUsers);
userRouter.get('/:id',UserController.getOneUser);
userRouter.delete('/:id',UserController.deleteOneUser);
export default userRouter;