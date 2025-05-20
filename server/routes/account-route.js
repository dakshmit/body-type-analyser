import express from 'express';
import { registerUser, loginUser, logoutUser } from '../controllers/account-controller.js';
import { googleLogin } from '../controllers/google-controller.js';
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.post('/auth/google', googleLogin);
export default router;