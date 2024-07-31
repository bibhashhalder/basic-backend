import { Router } from "express";
import { UserRouter } from "../modules/users/user.route";
import { studentRoute } from "../modules/student/student.route";
import { SemisterRoute } from "../modules/academicSemister/academicSemister.route";

const router =Router()
const moduleRoutes =[
    {path:'/users', route:UserRouter},
    {path:'/students',route:studentRoute},
    {path:'/semisters',route:SemisterRoute}
]
moduleRoutes.forEach((route)=>router.use(route.path,route.route))
export default router