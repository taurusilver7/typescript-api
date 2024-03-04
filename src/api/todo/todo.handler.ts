// Controller function for a corresponding todo route.
import { NextFunction, Request, Response } from "express";
import { TodoWithId, Todos, Todo } from "./todo.model";
import { ObjectId } from "mongodb";
import { ParamsWithId } from "../../interfaces/ParamsWithId";

export async function findAll(
	req: Request,
	res: Response<TodoWithId[]>,
	next: NextFunction
) {
	try {
		const todos = await Todos.find().toArray();
		res.json(todos);
	} catch (error) {
		next(error);
	}
}

export async function createOne(
	req: Request<{}, TodoWithId, Todo>,
	res: Response<TodoWithId>,
	next: NextFunction
) {
	try {
		const insertResult = await Todo.insertOne(req.body);
		if (!insertResult.acknowledged) throw new Error("Error inserting Todo");
		res.status(200);
		res.json({
			_id: insertResult.insertdId,
			...req.body,
		});
	} catch (error) {
		next(error);
	}
}

export async function findOne(
	req: Request<ParamsWithId, TodoWithId, {}>,
	res: Response<TodoWithId>,
	next: NextFunction
) {
	try {
		const result = await Todo.findOne({
			_id: new ObjectId(req.params?.id),
		});
		if (!result) {
			res.status(404);
			throw new Error(`Todo with id "${req.params?.id}" not found!`);
		}
		res.json(result);
	} catch (error) {
		next(error);
	}
}

export async function updateOne(req: Request<ParamsWithId, TodoWithId, Todo>, res: Response<TodoWithId>, next: NextFunction) {
   try {
      const result = await Todo.findOneAndUpdate({
         _id: new ObjectId(req.params.id);
      }, {
         $set: req.body
      }, {
         returnDocument: 'after',
      })

      if(!result.value) {
         res.status(404)
         throw new Error(`Todo with id "${req.params.id}" not found!!`);
      }
      res.json(result.value)
   } catch (error) {
      next(error)
   }
}