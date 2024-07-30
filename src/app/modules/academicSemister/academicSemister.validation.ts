import { z } from "zod";
import { academicSemisterCodeSchema, academicSemisterMonths, academicSemisterNameSchema } from "./academicSemister.constant";

const createAcademicSemisterValidationSchema =z.object({
    body:z.object({
        name:z.enum([...academicSemisterNameSchema] as [string, ...string[]]),
        code:z.enum([...academicSemisterCodeSchema] as [string, ...string[]]),
        year:z.date(),
        startMonth:z.enum([...academicSemisterMonths] as [string, ...string[]]),
        endMonth:z.enum([...academicSemisterMonths] as [string, ...string[]])
    })
})
export const academicSemisterValidatin ={
    createAcademicSemisterValidationSchema
}