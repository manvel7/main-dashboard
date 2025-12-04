import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const DOCUMENT_TYPES = ["Passport", "ID Card", "Driver License", "Residence Permit"];



export const documentFormSchema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  documentType: yup
    .string()
    .oneOf(DOCUMENT_TYPES, "Invalid document type")
    .required("Document type is required"),
  expirationDate: yup
    .date()
    .min(new Date(), "Expiration date cannot be in the past")
    .required("Expiration date is required"),
  documentImage: yup
    .mixed()
    .required("Document is required")
});

export type DocumentFormValues = yup.InferType<typeof documentFormSchema>;
