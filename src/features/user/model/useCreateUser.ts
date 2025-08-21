import { useState } from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { countryOptions } from '@/shared/constants';
import { useAppDispatch } from '@/app/store/hooks';
import { createUser as createUserAction } from '@/features/user/model/userSlice';

export interface CreateUserFormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  country: string;
  stateRegion: string;
  city: string;
  address: string;
  zipCode: string;
  company: string;
  role: string;
}

export const defaultCreateUserValues: CreateUserFormData = {
  fullName: '',
  email: '',
  phoneNumber: '',
  country: '',
  stateRegion: '',
  city: '',
  address: '',
  zipCode: '',
  company: '',
  role: '',
};

const createUserSchema = yup.object({
  fullName: yup.string().required('Full name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phoneNumber: yup.string().required('Phone number is required'),
  country: yup
    .string()
    .required('Please select a country')
    .oneOf(
      countryOptions
        .filter((option) => option.value !== '')
        .map((option) => option.value),
      'Please select a valid country'
    ),
  stateRegion: yup.string().required('State/region is required'),
  city: yup.string().required('City is required'),
  address: yup.string().required('Address is required'),
  zipCode: yup.string().required('Zip/code is required'),
  company: yup.string().required('Company is required'),
  role: yup.string().required('Role is required'),
});

const useCreateUser = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const createUser = useForm<CreateUserFormData>({
    defaultValues: defaultCreateUserValues,
    resolver: yupResolver(createUserSchema),
    mode: 'all',
  });

  const handleCreateUser = (values: CreateUserFormData) => {
    try {
      setLoading(true);
      dispatch(createUserAction(values));
      createUser.reset(defaultCreateUserValues, {
        keepDirty: false,
        keepTouched: false,
        keepIsSubmitted: false,
        keepSubmitCount: false,
        keepValues: false,
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    createUser,
    handleCreateUser,
    countryOptions,
    loading,
  };
};

export default useCreateUser;
