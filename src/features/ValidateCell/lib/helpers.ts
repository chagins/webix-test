import { ValidationRule } from './types';

const isNumber = (value: unknown): value is number => typeof Number(value) === 'number';
const isString = (value: unknown): value is string => typeof value === 'string';
const isDate = (value: unknown): value is Date => value instanceof Date;

export const numberValidationRule: ValidationRule = {
  validate: (value: unknown) => isNumber(value) && value >= 1 && value <= 100,
  errorMessage: 'Value must be a number between 1 and 100',
  successMessage: "It's a number between 1 and 100",
};

export const stringValidationRule: ValidationRule = {
  validate: (value: unknown) => isString(value) && value.length <= 50,
  errorMessage: 'Value must be a string with maximum length of 50 characters',
  successMessage: "It's a string less or equal 50 characters long",
};

export const dateValidationRule: ValidationRule = {
  validate: (value: unknown) => {
    if (!isNumber(value)) {
      return false;
    }
    const baseDate = new Date(Date.UTC(1899, 11, 30));
    const days = Math.floor(value);
    const time = (value - days) * 24 * 60 * 60 * 1000;
    const date = new Date(baseDate.getTime() + days * 24 * 60 * 60 * 1000 + time);
    const year = date.getFullYear();
    return year >= 2000;
  },
  errorMessage: 'Date must be in the year 2000 or later',
  successMessage: "It's a date, in the year 2000 or later",
};

export const phraseValidationRule: ValidationRule = {
  validate: (value: unknown) => isString(value) && value.includes('word'),
  errorMessage: 'Value must be a string & contains "word"',
  successMessage: "It's a string & contains 'word'",
};

export const validate = (value: unknown, validationRule: ValidationRule) => {
  const isSuccess = validationRule.validate(value);
  const message = isSuccess ? validationRule.successMessage : validationRule.errorMessage;
  return {
    isSuccess,
    message,
  };
};
