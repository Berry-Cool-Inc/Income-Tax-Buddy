export class IncomeTax {
  private basicIncome: number;

  constructor(basicIncome: number) {
    this.basicIncome = basicIncome;
  }

  public getBasicIncome = () => {
    return this.basicIncome;
  };

  public setBasicIncome = (value?: number) => {
    if (value != null) {
      console.log(value);
      this.basicIncome = value;
    }
  };
}
