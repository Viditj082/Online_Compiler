import express from 'express'
import { cppController,JavaController,pythonController,jsController } from '../controllers/executeController.js';
const router =express.Router();

router.post('/cpp',cppController)
router.post('/Java',JavaController)
router.post('/python',pythonController)
router.post('/js',jsController)

export default router