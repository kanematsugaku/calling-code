import { countryCodes } from './data';
import type { CountryCode } from './data';

type CallingCode = CountryCode & { body: string };

export default function callingCode(phoneNumber: string): CallingCode[] {
  const replaced = phoneNumber.replace('+', '');
  let maxMatchLength = 0;
  let result: CallingCode[] = [];
  countryCodes.forEach((countryCode) => {
    countryCode.codes.forEach((code) => {
      const isMatched = replaced.startsWith(code);
      if (isMatched) {
        const body = replaced.replace(code, '');
        const matchLenght = code.length;
        if (matchLenght === maxMatchLength) {
          result.push({ ...countryCode, body });
        } else if (matchLenght > maxMatchLength) {
          maxMatchLength = code.length;
          result = [{ ...countryCode, body }];
        }
      }
    });
  });
  return result;
}
