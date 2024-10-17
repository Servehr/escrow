import * as Yup from "yup";

export const NewUser = Yup.object().shape(
  {
      firstname:        Yup.string().min(3).required("Firstname is required"),
      surname:          Yup.string().min(3).required("Surname is required"),
      email:            Yup.string().email("Invalid email address").required("Email is required"),
      phoneno:      Yup.string().required("Phone number is required"),
      password:         Yup.string().required("Password is required"),
      confirm_password:  Yup.string()
  }
);