import express from 'express';

import { createUser, getAllusers, getUserInfoByID } from '../controllers/userController.js';

const router = express.Router();

router.route('/').get(getAllusers);
router.route('/').post(createUser);
router.route('/:id').get(getUserInfoByID);

export default router;