import express from 'express'
import { studentControlar } from './student.controlar';
const router =express.Router()
// will call controlar
router.post('/create-student', studentControlar.createStudent)
router.get('/', studentControlar.getAllStudents)
router.get('/:studentId',studentControlar.getSingleStudent)
export const studentRoute =router;