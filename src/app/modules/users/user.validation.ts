import { z } from "zod";

const userValidationSchema =z.object({
    password:z.string({
        invalid_type_error:'password must be string'
    })
    .max(10, {message:'password is not more than 10 chareter'})
    .optional(),
})
export default userValidationSchema
