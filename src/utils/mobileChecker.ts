export const startWithMobileIsZero = (phoneNumber: string) => {
  return phoneNumber.startsWith('0');
};

export const mobileRegex = /^(?:0)?(9\d{9})$/;

const MobileChecker = (mobileNumber = '') => {
  if (mobileNumber.toString().startsWith('09') || mobileNumber.toString().startsWith('9')) {
    if (mobileNumber.toString().length === 10 && !mobileNumber.toString().startsWith('0'))
      return mobileNumber;
    if (mobileNumber.toString().length === 11 && mobileNumber.toString().startsWith('0')) {
      return mobileNumber.toString().substr(1);
    }
  }
  return 'error';
};
export default MobileChecker;
