const Joi = require('joi');

// Joi schema for user registration
const registerSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'string.email': 'Invalid email format',
    'any.required': 'Email is required',
  }),
  password: Joi.string().min(6).required().messages({
    'string.min': 'Password must be at least 6 characters long',
    'any.required': 'Password is required',
  }),
});

// Joi schema for user login
const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'string.email': 'Invalid email format',
    'any.required': 'Email is required',
  }),
  password: Joi.string().required().messages({
    'any.required': 'Password is required',
  }),
});

module.exports = { registerSchema, loginSchema };