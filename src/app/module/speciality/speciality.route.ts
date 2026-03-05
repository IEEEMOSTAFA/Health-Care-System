import { Router } from "express";
import { SpecialtyController } from "./speciality.controller";




const router = Router();
router.post('/', 
    // checkAuth(Role.ADMIN, Role.SUPER_ADMIN), 
    SpecialtyController.createSpecialty);







export const SpecialtyRoutes = router;    