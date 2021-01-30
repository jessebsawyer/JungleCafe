import express from 'express';
import sendContactForm from '../controllers/contactController.js';
const router = express.Router();

router.post('/send', sendContactForm);

export default router;
