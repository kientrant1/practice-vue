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
    newsletter: yupBoolean().required(),
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
  amount: yupNumber().max(200).min(1),
})

export const formStepSchema = [
  yupObject({
    fullName: yupString().required().label('Full Name'),
    email: yupString().required().email().label('Email Address'),
  }),
  yupObject({
    favoriteDrink: yupString()
      .required()
      .oneOf(['coffee', 'tea', 'soda'], 'Choose a drink'),
  }),
]

const regexURL = /^(?=.{4,2048}$)((http|https):\/\/)?(www.)?(?!.*(http|https|www.))[a-zA-Z0-9_-]{1,63}(\.[a-zA-Z]{1,63}){1,5}(\/){1}.([\w\?[a-zA-Z-_%\/@?]+)*([^\/\w\?[a-zA-Z0-9_-]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/
export const repeatedFieldsSchema = yupObject().shape({
  links: yupArray().of(
    yupObject().shape({
      url: yupString().required('Please input URL').matches(regexURL, 'Invalid URL'),
    })
  ),
})
