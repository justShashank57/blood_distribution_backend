import express from 'express';
import { userLogin, userSignup } from '../Controllers/userController.js';

const router = express.Router();

// signup
router.get('/signup',userSignup);

//login
router.get('/signup',userLogin);

export {router as userRoutes};