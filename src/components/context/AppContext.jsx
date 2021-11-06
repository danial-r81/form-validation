import { createContext } from 'react';

export const AppContext = createContext({
  initialValues: {},
  validationSchema: {},
  onSubmit: () => {},
});
