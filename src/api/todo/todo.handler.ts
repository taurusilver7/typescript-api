// Controller function for a corresponding todo route.
import { NextFunction, Request, Response } from "express";
import { TodoWithId, Todos } from "./todo.model";

export async function findAll(
	req: Request,
	res: Response<TodoWithId[]>,
	next: NextFunction
) {
	try {
		const result = await Todos.find();
		const todos = await result.toArray();
		res.json(todos);
	} catch (error) {
		next(error);
	}
}
