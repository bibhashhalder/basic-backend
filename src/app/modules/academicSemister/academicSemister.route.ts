import express from 'express';
import { academicSemisterController } from './academicSemister.controller';
import validateRequest from '../../middlewares/validateRequest';
import { academicSemisterValidatin } from './academicSemister.validation';
// import { createAcademicSemisterValidationSchema } from '../student/student.validation';
const router =express.Router();
router.post('/create-semister',validateRequest(academicSemisterValidatin.createAcademicSemisterValidationSchema), academicSemisterController.createAcademicSemister)
export const SemisterRoute =router