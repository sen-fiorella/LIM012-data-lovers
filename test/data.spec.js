import {
  alphabetOrder,
  roleFilter,
} from '../src/data.js';

const data = [
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

const firstOrder = [
  {
    name: 'Aatrox',
    tags: ['Fighter', 'Tank'],
  },
  {
    name: 'Diana',
    tags: ['Fighter', 'Mage'],
  },
  {
    name: 'Zyra',
    tags: ['Mage', 'Support'],
  },
];

const secondOrder = [
  {
    name: 'Zyra',
    tags: ['Mage', 'Support'],
  },
  {
    name: 'Diana',
    tags: ['Fighter', 'Mage'],
  },
  {
    name: 'Aatrox',
    tags: ['Fighter', 'Tank'],
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
    expect(alphabetOrder(data, 'name', 'ascendente')).toEqual(firstOrder);
  });

  it('return sort champions from z-a', () => {
    expect(alphabetOrder(data, 'name', 'descendente')).toEqual(secondOrder);
  });
});

describe('roleFilter', () => {
  it('is a function', () => {
    expect(typeof roleFilter).toBe('function');
  });

  it('return champion filter by role', () => {
    expect(roleFilter(data, 'Mage')).toEqual(filterMage);
  });
});

// describe('alphabetOrder', () => {
//   it('is a function', () => {
//     expect(typeof alphabetOrder).toBe('function');
//   });
//   it('is a function', () => {
//     expect(typeof roleFilter).toBe('function');
//   });
// });

// describe('roleFilter', () => {
//   it('is a function', () => {
//     expect(typeof roleFilter).toBe('function');
//   });
// });

//   it('returns `example`', () => {
//     expect(example()).toBe('example');
//   });
// });


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
