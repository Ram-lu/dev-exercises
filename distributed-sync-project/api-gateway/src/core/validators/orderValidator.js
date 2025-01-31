import joi from 'joi';

export const orderSchema = joi.object({
    user_id: joi.string().uuid().required(),
    items: joi.array().items(joi.object()).required(),
    total: joi.number().min(0.01).required(),
})