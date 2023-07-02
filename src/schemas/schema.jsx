import * as Yup from "yup";

export const contactSchema = Yup.object({
    name: Yup.string().min(3).max(20).required("Please enter your name."),
    email: Yup.string().email().required("Please enter your email."),
    message: Yup.string().min(20),
})