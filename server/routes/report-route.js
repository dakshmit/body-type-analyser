import express from 'express';
import { SaveReport, GetAllReports,GetReportByID,GetDosha } from '../controllers/report-controller.js';

const router = express.Router();

router.post('/save-report', SaveReport);
router.get('/reports', GetReportByID);
router.get('/dosha/:prakriti',GetDosha);
export default router;