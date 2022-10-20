import {
  string as yupString,
  object as yupObject,
  ref as yupRef,
  array as yupArray,
  number as yupNumber,
  boolean as yupBoolean,
} from 'yup'

export const subscriptionSchema = yupObject({
  subscriptionForm: yupObject({
    email: yupString().required(),
    note: yupString().required(),
    newsletter: yupBoolean().required()
  }),
})

export const registrationSchema = yupObject({
  firstName: yupString().required('This is required field'),
  lastName: yupString().required('This is required field'),
  pwd: yupString()
    .required('This is required field')
    .min(6, 'Must at least 6 characters'),
  confirmPwd: yupString()
    .required()
    .oneOf([yupRef('pwd')], 'Passwords do not match'),
  newsletter: yupArray().min(1, 'Choose at least one channel'),
  amount: yupNumber().required().max(1000).min(100),
})
