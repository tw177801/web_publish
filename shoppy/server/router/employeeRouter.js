import express from 'express';
import * as cotroller from '../controller/employeeController.js';

const router = express.Router();

router.get('/all', cotroller.getEmployeeAll);   // 경로:/employee/all

export default router;