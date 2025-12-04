import { useState } from "react";
import { documentFormSchema, DocumentFormValues } from "../schema/documentSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export const useUserProcessDocument = () => {

  const documentForm = useForm<DocumentFormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      documentType: "",
      expirationDate: new Date(),
      documentImage: '',
    },
    resolver: yupResolver(documentFormSchema),
    mode: "all",
  });


  const handleSubmit = (values: DocumentFormValues) => {
    console.log(values, 'values')
  }

  return {
    documentForm,
    handleSubmit
  };
};
