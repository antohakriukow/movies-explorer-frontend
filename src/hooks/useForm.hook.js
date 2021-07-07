import { useState, useCallback } from 'react';

export function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);
  const [isOk, setIsOk] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;
    setValues({...values, [name]: value});
    setIsOk(evt.target.closest("form").checkValidity());
    setErrors({...errors, [name]: evt.target.validationMessage });
  };

  const resetForm = useCallback(
    (resetedValues = {}, resetedIsOk = false, resetedErrors = {}) => {
      setValues(resetedValues);
      setIsOk(resetedIsOk);
      setErrors(resetedErrors);
    },
    [setValues, setIsOk, setErrors]
  );

  return { values, handleChange, errors, isOk, resetForm };
}
