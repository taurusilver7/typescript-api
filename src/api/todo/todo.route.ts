import { Router } from "express";
import * as TodoHandler from "./todo.handler";
import { validateRequest } from "../../middlewares";
import { ParamsWithId } from "../../interfaces/ParamsWithId";
import { Todo } from "./todo.model";

const router = Router();

router.get("/", TodoHandler.findAll);
router.post("/", validateRequest({ body: Todo }), TodoHandler.createOne);

router.get(
	"/:id",
	validateRequest({ params: ParamsWithId }),
	TodoHandler.findOne
);

router.put(
	"/:id",
	validateRequest({ params: ParamsWithId, body: Todo }),
	TodoHandler.updateOne
);

router.delete("/:id", validateRequest({ params: ParamsWithId}), TodoHandler.deleteOne)

export default router;
