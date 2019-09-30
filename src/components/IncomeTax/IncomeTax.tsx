import Tax from '../Tax/Tax';
import TaxRates from './assets/TaxRates2020';

export class IncomeTax extends Tax {
  taxBrackets: Array<any> = [];
  taxRebates: Array<any> = [];
  ageBracket: number;

  constructor(basicIncome: number) {
    super(basicIncome);
    this.taxBrackets = TaxRates.taxBrackets;
    this.taxRebates = TaxRates.taxRebates;
    this.ageBracket = 0;
  }

  getAgeBracket = () => {
    return this.ageBracket;
  };

  setAgeBracket = (value?: number) => {
    if (value) {
      this.ageBracket = value;
      this.calculateTax();
    }
  };

  setTotalAmountBeforeTax = (value?: number) => {
    if (value) {
      this.totalAmountBeforeTax = value;
      this.calculateTax();
    }
  };

  //Overload
  calculateTax = () => {
    const basicIncome = this.getTotalAmountBeforeTax();
    let taxAmount = 0;

    if (basicIncome === 0) return null;

    for (let i = 0; i < this.taxBrackets.length; i++) {
      let upperBound = this.taxBrackets[i]['upperBound'] / 12;

      if (basicIncome < upperBound || i + 1 === this.taxBrackets.length) {
        let lowerBound = i > 0 ? this.taxBrackets[i - 1]['upperBound'] / 12 : 1;
        let percentage = this.taxBrackets[i]['percentage'] / 100;
        let rebateAmount = this.taxRebates[this.getAgeBracket()]['amount'] / 12;
        taxAmount = this.taxBrackets[i]['taxForBracket'] / 12 + (basicIncome - lowerBound) * percentage - rebateAmount;
        taxAmount = taxAmount < 0 ? 0 : taxAmount;
        break;
      }
    }

    this.setTotalTax(taxAmount);
    this.setTotalAmountAfterTax(this.getTotalAmountBeforeTax() - taxAmount);
  };
}
