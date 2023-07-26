import express from "express";
import {
    authUser,
    resgisterUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUserById,
    updateUser,
} from "../controllers/userController.js";

const router = express.Router();

router.route('/').post(resgisterUser).get(getUsers);
router.post('/logout', logoutUser);
router.post('/login', authUser);
router.route('/profile').get(getUserProfile).put(updateUserProfile);
router.route('/:id').delete(deleteUser).get(getUserById).put(updateUser);

export default router;