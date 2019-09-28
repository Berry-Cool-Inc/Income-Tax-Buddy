import ITax from '../../Interfaces/ITax';

// To be used with strategy design pattern
export default class Tax implements ITax {
  totalAmountBeforeTax: number = 0;
  totalTax: number = 0;
  totalAmountAfterTax: number = 0;

  constructor(totalAmountBeforeTax: number) {
    this.totalAmountBeforeTax = totalAmountBeforeTax;
    this.totalTax = 0;
  }

  setTotalAmountBeforeTax = (value?: number) => {
    if (value != null) this.totalAmountBeforeTax = value;
    this.calculateTax();
  };

  getTotalAmountBeforeTax = () => {
    return this.totalAmountBeforeTax;
  };

  setTotalTax = (value?: number) => {
    if (value != null) this.totalTax = value;
  };

  getTotalTax = () => {
    return this.totalTax;
  };

  setTotalAmountAfterTax = (value?: number) => {
    if (value != null) this.totalAmountAfterTax = value;
  };

  getTotalAmountAfterTax = () => {
    return this.totalAmountAfterTax;
  };

  calculateTax = () => {};
}
