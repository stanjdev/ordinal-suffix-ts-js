/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const ordinalSuffix = require('../src/index.js');

test('ordinalSuffix catches exception of numbers ending with 11, 12, 13', () => {
  expect(ordinalSuffix(11)).toBe('11th');
  expect(ordinalSuffix(12)).toBe('12th');
  expect(ordinalSuffix(13)).toBe('13th');
  expect(ordinalSuffix(111)).toBe('111th');
  expect(ordinalSuffix(112)).toBe('112th');
  expect(ordinalSuffix(113)).toBe('113th');
  expect(ordinalSuffix(211)).toBe('211th');
  expect(ordinalSuffix(312)).toBe('312th');
  expect(ordinalSuffix(413)).toBe('413th');
  expect(ordinalSuffix(1612)).toBe('1612th');
});

test('ordinalSuffix appends -st to numbers ending with 1', () => {
  expect(ordinalSuffix(1)).toBe('1st');
  expect(ordinalSuffix(71)).toBe('71st');
  expect(ordinalSuffix(1001)).toBe('1001st');
});

test('ordinalSuffix appends -nd to numbers ending with 2', () => {
  expect(ordinalSuffix(2)).toBe('2nd');
  expect(ordinalSuffix(502)).toBe('502nd');
  expect(ordinalSuffix(92)).toBe('92nd');
});

test('ordinalSuffix appends -rd to numbers ending with 3', () => {
  expect(ordinalSuffix(3)).toBe('3rd');
  expect(ordinalSuffix(23)).toBe('23rd');
  expect(ordinalSuffix(433)).toBe('433rd');
});

test('ordinalSuffix appends -th to all other numbers', () => {
  expect(ordinalSuffix(4)).toBe('4th');
  expect(ordinalSuffix(9)).toBe('9th');
  expect(ordinalSuffix(55)).toBe('55th');
  expect(ordinalSuffix(978)).toBe('978th');
});

