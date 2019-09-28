import Tax from '../Tax/Tax';
import TaxRates from './assets/TaxRates';

export class IncomeTax extends Tax {
  taxBrackets: Array<any> = [];
  ageBracket?: number;

  constructor(basicIncome: number) {
    super(basicIncome);
    this.taxBrackets = TaxRates.brackets;
  }

  getAgeBracket = () => {
    return this.ageBracket;
  };

  setAgeBracket = (value?: number) => {
    if (value) this.ageBracket = value;
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

    if (basicIncome == 0) return null;

    for (let i = 0; i < this.taxBrackets.length; i++) {
      let upperBound = this.taxBrackets[i]['upperBound'] / 12;

      if (basicIncome < upperBound) {
        let lowerBound = i > 0 ? this.taxBrackets[i - 1]['upperBound'] / 12 : 1;
        let percentage = this.taxBrackets[i]['percentage'] / 100;
        taxAmount = this.taxBrackets[i]['taxForBracket'] / 12 + (basicIncome - lowerBound) * percentage;
        break;
      }
    }

    this.setTotalTax(taxAmount);
    this.setTotalAmountAfterTax(this.getTotalAmountBeforeTax() - taxAmount);
  };
}
