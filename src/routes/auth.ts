import { Router } from "express";
import { AuthControllers } from "../controllers/AuthControllers";

const router=Router(); 
const authControllers  = new AuthControllers();

    router.post("/register", authControllers.register.bind(authControllers));

export default router;
 