# TS-JS Ordinal Suffixes

![npm](https://img.shields.io/npm/v/ordinalsuffix-js)
![npm bundle size](https://img.shields.io/bundlephobia/min/ordinalsuffix-js)

A library to convert numbers to strings with the correct ordinal suffix.

## Installation

Use the package manager [npm](https://docs.npmjs.com/cli/v8/commands/npm) to install.

```bash
npm i ordinalsuffix-js
```

[Link to npm library](https://www.npmjs.com/package/ordinalsuffix-js)

## Usage

```ts
const ordinalSuffix = require('ordinalsuffix-js');
ordinalSuffix(1)    // 'st' -> 1st
ordinalSuffix(2)    // 'nd' -> 2nd
ordinalSuffix(3)    // 'rd' -> 3rd
ordinalSuffix(4)    // 'th' -> 4th
ordinalSuffix(11)   // 'th' -> 11th
ordinalSuffix(502)  // 'nd' -> 502nd
ordinalSuffix(1001) // 'st' -> 1001st
ordinalSuffix(433)  // 'rd' -> 433rd
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Testing

To run tests:

```bash
npm test
```

To check code test coverage:

```bash
npx jest --coverage
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
