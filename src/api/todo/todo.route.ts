import { Router } from "express";
import * as TodoHandler from './todo.handler';

const router = Router();

router.get("/", TodoHandler.findAll);

export default router;
