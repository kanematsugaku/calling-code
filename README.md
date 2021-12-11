# `calling-code`

Country calling codes utils.

## Installation

```sh
npm install calling-code
```

## Usage

```ts
import callingCode from 'calling-code';

const phoneNumber = '+86012345678'; // '86012345678' is also ok.
const result = callingCode(phoneNumber);
```

result is as follows:

```js
[
  {
    country: 'China',
    codes: ['86'],
    iso2: 'CN',
    iso3: 'CHN',
    body: '012345678',
  },
];
```

### Example 1

```ts
const result = callingCode('+12131234567');
```

```js
[
  {
    country: 'Canada',
    codes: ['1'],
    iso2: 'CA',
    iso3: 'CAN',
    body: '2131234567',
  },
  {
    country: 'United States',
    codes: ['1'],
    iso2: 'US',
    iso3: 'USA',
    body: '2131234567',
  },
];
```

### Example 2

```ts
const result = callingCode('+1-809123456');
```

```js
[
  {
    country: 'Dominican Republic',
    codes: ['1-809', '1-829', '1-849'],
    iso2: 'DO',
    iso3: 'DOM',
    body: '123456',
  },
];
```
