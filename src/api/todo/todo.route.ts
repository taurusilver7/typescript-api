import { Router } from "express";
import * as TodoHandler from './todo.handler';

const router = Router();

router.get("/", TodoHandler.findAll);
router.post("/", TodoHandler.createOne)

export default router;
