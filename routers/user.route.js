
import express from 'express';
import userController from '../controllers/user.controller.js';

const router = express.Router();

router.get("/", userController.getAlluser);
router.get("/:id", userController.getOneUser);
router.post("/", userController.createUser);
router.patch("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

export default router;