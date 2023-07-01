import * as yup from 'yup';

export const cryptoExchangeValidationSchema = yup.object().shape({
  name: yup.string().required(),
  country: yup.string().required(),
  fees: yup.string().required(),
  spot_availability: yup.boolean().required(),
  derivatives_availability: yup.boolean().required(),
  organization_id: yup.string().nullable(),
});
