import React from "react";
import { Field, Form, Formik } from "formik";
import {
  Button,
  TextField,
  Select,
  ErrorText,
} from "@cruk/cruk-react-components";
import { formSchema } from "./schema";

export const SearchForm = (props) => {
  const { searchQuery } = props;
  return (
    <Formik
      validateOnChange
      initialValues={{
        keywords: "",
        mediaType: "",
        yearStart: "",
      }}
      validationSchema={formSchema}
      onSubmit={(values) => {
        searchQuery(values);
      }}
    >
      {({ errors, touched }) => {
        return (
          <Form>
            <Field name="keywords">
              {({ field }) => (
                <>
                  <TextField label="Keywords" type="text" required {...field} />
                  {errors.keywords && touched.keywords && (
                    <ErrorText>{errors.keywords}</ErrorText>
                  )}
                </>
              )}
            </Field>
            <Field name="mediaType">
              {({ field }) => (
                <>
                  <Select label="Media type" type="select" required {...field}>
                    <option value="" hidden>
                      Select a media
                    </option>
                    <option value="image">image</option>
                    <option value="audio">audio</option>
                    <option value="video">video</option>
                  </Select>
                  {errors.mediaType && touched.mediaType && (
                    <ErrorText>{errors.mediaType}</ErrorText>
                  )}
                </>
              )}
            </Field>
            <Field name="yearStart">
              {({ field }) => (
                <>
                  <TextField label="Year start" type="text" {...field} />
                  {errors.yearStart && touched.yearStart && (
                    <ErrorText>{errors.yearStart}</ErrorText>
                  )}
                </>
              )}
            </Field>

            <Button type="submit">Submit</Button>
          </Form>
        );
      }}
    </Formik>
  );
};
