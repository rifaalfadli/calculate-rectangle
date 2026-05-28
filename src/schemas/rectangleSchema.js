import * as yup from "yup";

export const rectangleSchema = yup.object({
  width: yup
    .number()
    .typeError("Width must be a number")
    .required("Width is required")
    .positive("Width must be greater than 0"),

  height: yup
    .number()
    .typeError("Height must be a number")
    .required("Height is required")
    .positive("Height must be greater than 0"),
});
