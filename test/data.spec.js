import {
  alphabetOrder,
  roleFilter,
} from '../src/data.js';

const dataTest = [
  {
    name: 'Aatrox',
    tags: ['Fighter', 'Tank'],
  },
  {
    name: 'Zyra',
    tags: ['Mage', 'Support'],
  },
  {
    name: 'Diana',
    tags: ['Fighter', 'Mage'],
  },
];

const dataName = [
  {
    name: 'Aatrox',
  },
  {
    name: 'Zyra',
  },
  {
    name: 'Diana',
  },
];

const orderAscent = [
  {
    name: 'Aatrox',
  },
  {
    name: 'Diana',
  },
  {
    name: 'Zyra',
  },
];

const orderDescent = [
  {
    name: 'Zyra',
  },
  {
    name: 'Diana',
  },
  {
    name: 'Aatrox',
  },
];

const filterMage = [
  {
    name: 'Zyra',
    tags: ['Mage', 'Support'],
  },
  {
    name: 'Diana',
    tags: ['Fighter', 'Mage'],
  },
];
describe('alphabetOrder', () => {
  it('is a function', () => {
    expect(typeof alphabetOrder).toBe('function');
  });

  it('return sort champions from a-z', () => {
    expect(alphabetOrder(dataName, 'a-z')).toEqual(orderAscent);
  });

  it('return sort champions from z-a', () => {
    expect(alphabetOrder(dataName, 'z-a')).toEqual(orderDescent);
  });
});

describe('roleFilter', () => {
  it('is a function', () => {
    expect(typeof roleFilter).toBe('function');
  });

  it('return champion filter by role', () => {
    expect(roleFilter(dataTest, 'Mage')).toEqual(filterMage);
  });
});
