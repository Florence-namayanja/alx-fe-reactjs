import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Validation schema
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required")
});

function FormikForm() {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log("Formik submission:", values);
        alert(`User ${values.username} registered successfully!`);
        resetForm();
      }}
    >
      {() => (
        <Form className="flex flex-col gap-3 p-4 border rounded w-80">
          <h2 className="text-lg font-bold">Register (Formik)</h2>

          <Field
            type="text"
            name="username"
            placeholder="Username"
            className="border p-2 rounded"
          />
          <ErrorMessage name="username" component="div" className="text-red-500 text-sm" />

          <Field
            type="email"
            name="email"
            placeholder="Email"
            className="border p-2 rounded"
          />
          <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />

          <Field
            type="password"
            name="password"
            placeholder="Password"
            className="border p-2 rounded"
          />
          <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />

          <button type="submit" className="bg-green-500 text-white p-2 rounded">
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikForm;
