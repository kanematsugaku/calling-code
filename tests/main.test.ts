/**
 * Copyright (c) 2016 Joon Ho Cho
 * Released under the MIT license
 * https://github.com/joonhocho/country-calling-code
 */

import callingCode from '../src/main';
import { countryCodes } from '../src/data';

test('data', () => {
  const countryMap = {};
  const iso2Map = {};
  const iso3Map = {};

  expect(countryCodes.length).toBe(240);

  countryCodes.forEach(({ country, codes, iso2, iso3 }) => {
    expect(country.trim()).toEqual(country);
    expect(country.length > 0).toBe(true);

    codes.forEach((code) => expect(code).toMatch(/^\d+(-\d+)?$/));

    expect(iso2).toMatch(/^[A-Z]{2}$/);
    expect(iso3).toMatch(/^[A-Z]{3}$/);

    expect(country in countryMap).toBe(false);
    countryMap[country] = true;

    expect(iso2 in iso2Map).toBe(false);
    iso2Map[iso2] = true;

    expect(iso3 in iso3Map).toBe(false);
    iso3Map[iso3] = true;
  });
});

test('main', () => {
  const chn1 = '+86012345678';
  const chn2 = '86012345678';
  const usa = '+12131234567';
  const dom = '+1-809123456';
  const xxx = '+99999999999';

  const chn1Res = callingCode(chn1);
  const chn2Res = callingCode(chn2);
  const usaRes = callingCode(usa);
  const domRes = callingCode(dom);
  const xxxRes = callingCode(xxx);

  expect(chn1Res[0].iso3).toBe('CHN');
  expect(chn2Res[0].iso3).toBe('CHN');
  expect(usaRes.length).toBe(2);
  expect(domRes.length).toBe(1);
  expect(domRes[0].codes.length).toBe(3);
  expect(xxxRes.length).toBe(0);
});
