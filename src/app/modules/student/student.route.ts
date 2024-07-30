import express from 'express'
import { studentControlar } from './student.controlar';
const router =express.Router()
// will call controlar
router.get('/', studentControlar.getAllStudents)
router.get('/:studentId',studentControlar.getSingleStudent)
router.delete('/:studentId',studentControlar.deleteStudent)
export const studentRoute =router;