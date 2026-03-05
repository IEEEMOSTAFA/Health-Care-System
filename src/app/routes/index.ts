import { Router } from "express";
import { SpecialtyRoutes } from "../module/speciality/speciality.route";

const router = Router();

// router.use("/auth", AuthRoutes);
router.use("/specialties", SpecialtyRoutes)



export const IndexRoutes = router;