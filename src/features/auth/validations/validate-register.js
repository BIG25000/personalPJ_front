import Joi from "joi";

const registerSchema = Joi.object({
  email: Joi.alternatives([
    Joi.string().email({ tlds: false }),
    Joi.string().pattern(/^[0-9]{10}$/),
  ]).required(),
  firstName: Joi.string().required().trim(),
  lastName: Joi.string().required().trim(),
  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{6,}$/)
    .required(),
  confirmPassword: Joi.string().valid(Joi.ref("password")).required(),
  foodAllergies: Joi.string().trim(),
  congenitalDisease: Joi.string().trim(),
  gender: Joi.string().trim(),
  mobile: Joi.string().required().trim(),
  nameEmergency: Joi.string().required().trim(),
  mobileEmergency: Joi.string().required().trim(),
});

export default registerSchema;
