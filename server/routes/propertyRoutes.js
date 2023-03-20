import express from 'express';

import {
    getAllProperties,
    getPropertyDetail,
    createProperty,
    updateProperty,
    deleteProperty
} from '../controllers/propertyController.js'

const router = express.Router();


router.route('/').get(getAllProperties);
router.route('/').get(getPropertyDetail);
router.route('/').post(createProperty);
router.route('/').patch(updateProperty);
router.route('/').delete(deleteProperty);

export default router;