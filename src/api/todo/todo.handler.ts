// Controller function for a corresponding todo route.
import { NextFunction, Request, Response } from "express";
import { TodoWithId, Todos, Todo } from "./todo.model";
import { InsertOneResult } from "mongodb";

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

export async function createOne(
	req: Request<{}, InsertOneResult<Todo>, Todo>,
	res: Response<TodoWithId>,
	next: NextFunction
) {
	try {
		const validateResult = await Todo.parse(req.body);
		const insertResult = await Todo.insertOne(validateResult);
      res.json(insertResult);
	} catch (error) {
		next(error);
	}
}
