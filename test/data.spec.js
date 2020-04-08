import {
  namFilt,
  alphabetOrder,
  roleFilter,
} from '../src/data.js';

const dataTest = [
  {
    name: 'Ahri',
    tags: ['Mage', 'Assassin'],
  },
  {
    name: 'Akali',
    tags: ['Assassin'],
  },
  {
    name: 'Nunu',
    tags: ['Fighter', 'Support'],
  },
  {
    name: 'Zac',
    tags: ['Tank', 'Fighter'],
  },
  {
    name: 'Diana',
    tags: ['Fighter', 'Mage'],
  },
];

const dataName = [
  {
    name: 'Ahri',
  },
  {
    name: 'Akali',
  },
  {
    name: 'Nunu',
  },
  {
    name: 'Zac',
  },
  {
    name: 'Diana',
  },
];

const orderAscent = [
  {
    name: 'Ahri',
  },
  {
    name: 'Akali',
  },
  {
    name: 'Diana',
  },
  {
    name: 'Nunu',
  },
  {
    name: 'Zac',
  },
];

const orderDescent = [
  {
    name: 'Zac',
  },
  {
    name: 'Nunu',
  },
  {
    name: 'Diana',
  },
  {
    name: 'Akali',
  },
  {
    name: 'Ahri',
  },
];

const filterMage = [
  {
    name: 'Ahri',
    tags: ['Mage', 'Assassin'],
  },
  {
    name: 'Diana',
    tags: ['Fighter', 'Mage'],
  },
];

const searchChamp = [
  {
    name: 'Ahri',
  },
  {
    name: 'Akali',
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

describe('namFilt', () => {
  it('is a function', () => {
    expect(typeof namFilt).toBe('function');
  });
  it('return champion filter by first letter A', () => {
    expect(namFilt(dataName, 'name', 'A')).toEqual(searchChamp);
  });
});
