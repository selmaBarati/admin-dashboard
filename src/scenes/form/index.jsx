import React from "react";
import { useLayoutEffect } from "react";
import { Box, Button, createMuiTheme, createTheme, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import swal from "sweetalert";
import Header from "../../components/Header";
import { useState } from "react";
// ****



const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  
  const handleFormSubmit = (values) => {
    if(values){
     swal(
      {
        text: "کاربر جدید با موفقیت اضافه شد :)",
        value: true,
        visible: true,
        className: "",
        closeModal: true,
        icon: "success",
      }
     )
    }
  };

  

  return (
    <Box m="20px">
      <Header title="ایجاد کاربر" subtitle="ایجاد حساب کاربری جدید" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
       
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="نام"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="نام خانوادگی"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" , direction: "rtl" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="ایمیل"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="شماره تماس"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="آدرس محل سکونت"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="address1"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="آدرس محل کار"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name="address2"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained" >
                اضافه کردن کاربر جدید
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("وارد کردن اسم الزامی است !"),
  lastName: yup.string().required("وارد کردن اسم الزامی است !"),
  email: yup.string().email("ایمیل نامعتبر است ").required("وارد کردن ایمیل الزامی است!"),
  contact: yup
    .string()
    .matches(phoneRegExp, "شماره تلفن نامعتبر است !")
    .required("required"),
  address1: yup.string().required("وارد کردن ادرس الزامی است !"),
  address2: yup.string().required("وارد کردن آدرس الزامی است"),
});

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

export default Form;
