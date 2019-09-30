const taxBrackets = [
  {
    percentage: 18,
    upperBound: 195850,
    taxForBracket: 0,
  },
  {
    percentage: 26,
    upperBound: 305850,
    taxForBracket: 35253,
  },
  {
    percentage: 31,
    upperBound: 423300,
    taxForBracket: 63853,
  },
  {
    percentage: 36,
    upperBound: 555600,
    taxForBracket: 100263,
  },
  {
    percentage: 39,
    upperBound: 708310,
    taxForBracket: 147891,
  },
  {
    percentage: 41,
    upperBound: 1500000,
    taxForBracket: 207448,
  },
  {
    percentage: 45,
    upperBound: -1,
    taxForBracket: 532041,
  },
];

const taxRebates = [
  {
    upperBound: 64,
    amount: 14220,
  },
  {
    upperBound: 74,
    amount: 7794,
  },
  {
    upperBound: '💀',
    amount: 2601,
  },
];

const taxThresholds = [
  {
    upperBound: 64,
    amount: 79000,
  },
  {
    upperBound: 74,
    amount: 122300,
  },
  {
    upperBound: '<span role="img" aria-label="Skull">💀</span>',
    amount: 136750,
  },
];

export default { taxBrackets, taxRebates, taxThresholds };
