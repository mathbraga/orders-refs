const isAlphaNumeric = (value: string): boolean => {
  // matches alpha numeric strings
  const regex = /^[a-zA-Z0-9]+$/;
  const matches = value.match(regex);

  // matches = null if no matches
  if (!matches) return false;

  return true;
};

const isPositiveInteger = (value: number): boolean => {
  return Number.isInteger(value) && value >= 0;
};

// check if 2 precision decimal
const isPositiveTwoDecimal = (value: string): boolean => {
  // matches only numbers with up to 2 digits after comma
  const regex = /^\d+(,\d{1,2})?$/;
  const matches = value.match(regex);

  // matches = null if no matches
  if (!matches) return false;

  return true;
};

export { isAlphaNumeric, isPositiveInteger, isPositiveTwoDecimal };
