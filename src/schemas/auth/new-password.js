import * as yup from "yup";

export const newPasswordSchema = yup.object({
  password: yup.string().required()
});
