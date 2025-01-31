import joi from 'joi';

export const userSchema = joi.object({
    name: joi.string().min(3).max(100).required(),
    email: joi.string().email().required(),
})