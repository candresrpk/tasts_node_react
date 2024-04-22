import Joi from "joi";

const id = Joi.number().integer().min(1);
const title = Joi.string().min(3).max(50);
const description = Joi.string().min(2).max(250);
const done = Joi.boolean().default(false);
const color = Joi.string().min(2);
const created = Joi.date().default(new Date());


export const createTaskSchema = Joi.object({
    title: title.required(),
    description: description,
    color: color,
})

export const updteTaskSchema = Joi.object({
    title: title,
    description: description,
    done: done,
    color: color,
})

export const getProductSchema = Joi.object({
    id: id.required()
})

