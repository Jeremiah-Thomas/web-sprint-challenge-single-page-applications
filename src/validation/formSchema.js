import * as yup from "yup";

const formSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required()
    .min(2, "name must be at least 2 characters"),

  size: yup.string().oneOf(["Large", "Medium", "Small"]).required(),

  topping1: yup.bool(),
  topping2: yup.bool(),
  topping3: yup.bool(),
  topping4: yup.bool(),

  special: yup.string().trim(),
});

export default formSchema;
