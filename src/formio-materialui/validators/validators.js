export const validation = (key, value, validators) => {
  const result = { key: [] };
  //   if(validators.)
};

const validateMaxLength = (value, maxLength, errorMessage) => {
  return value && value.toString().length <= maxLength;
};

const validateMinLength = (value, minLength, errorMessage) => {
  return value && value.toString().length >= minLength;
};

const validateRequired = (value, errorMessage) => {
  return value && value.toString().trim();
};
