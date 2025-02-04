import express from 'express';
import * as controller from '../controller/memberController.js';

const router = express.Router();

router.post('/signup', controller.registerMember);



export default router; 
