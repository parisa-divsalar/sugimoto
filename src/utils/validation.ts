import MobileChecker, { mobileRegex } from '@/utils/mobileChecker.ts';

export const toEnglishNumber = (str: string) => {
  const persianNumbers = ['۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹', '۰'];
  const englishNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

  return str
    .split('')
    .map((c) => englishNumbers[persianNumbers.indexOf(c)] || c)
    .join('');
};

export const msisdnValidation = (msisdn: string) => {
  return (
    msisdn.length < 10 ||
    MobileChecker(msisdn) === 'error' ||
    (MobileChecker(msisdn) !== 'error' && !mobileRegex.test(MobileChecker(msisdn)))
  );
};

export const validateDigit = (value: string) => value.search(/[0-9]/) < 0;

export const emailValidation = (value: string) => {
  return value.match(
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
  );
};

export const isContainsLowercase = (value: string) => {
  const isContainsUppercase = /^(?=.*[A-Z]).*$/;
  return isContainsUppercase.test(value);
};

export const validateSpecialChar = (value: string) => value.search(/[!@#\$%\^&\*_]/) < 0;
