export default interface Tax {
  //find better name
  totalAmountBeforeTax: number;
  setTotalAmountBeforeTax: Function;
  getTotalAmountBeforeTax: Function;

  totalTax: number;
  setTotalTax: Function;
  getTotalTax: Function;

  totalAmountAfterTax: number;
  setTotalAmountAfterTax: Function;
  getTotalAmountAfterTax: Function;

  calculateTax: Function;
}
