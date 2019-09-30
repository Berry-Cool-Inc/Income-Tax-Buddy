function roundDecimals(value?: number, precision?: number) {
  if (value === undefined || precision === undefined) return null;
  precision = Math.pow(10, precision);
  return Math.ceil(value * precision) / precision;
}

export default { roundDecimals };
