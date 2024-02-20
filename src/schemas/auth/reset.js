import * as yup from 'yup';

export const resetSchema = yup.object({
    email: yup.string().email().required(),
})