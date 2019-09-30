import React from 'react';
import { CustomComponent } from '../CustomComponent';
import { InputNumber, Card, Descriptions, Select } from 'antd';
import { IncomeTax } from './IncomeTax';
import formatterUtil from '../../utils/FormatterUtil';
import TaxRates from './assets/TaxRates2020';

const { Option } = Select;

export class IncomeTaxForm extends CustomComponent {
  private incomeTax: IncomeTax;
  private taxRebateBrackets: Array<any> = [];

  constructor(props: {}) {
    super(props);
    this.incomeTax = new IncomeTax(0);
    this.taxRebateBrackets = TaxRates.taxRebates;
  }

  render() {
    return (
      <React.Fragment>
        <Card style={{ width: 800 }}>
          <Descriptions size="middle" bordered>
            <Descriptions.Item label="Please select your age group" span={3}>
              <Select
                defaultValue={this.incomeTax.getAgeBracket()}
                style={{ width: 200 }}
                onChange={(value: number) => {
                  this.renderOnSet(this.incomeTax.setAgeBracket, value);
                }}
              >
                {this.taxRebateBrackets.map((value, index: number) => {
                  let lowerBound = index > 0 ? this.taxRebateBrackets[index - 1]['upperBound'] + 1 : 1;
                  let upperBound = value['upperBound'];
                  return (
                    <Option key={index} value={index}>
                      {lowerBound} - {upperBound}
                    </Option>
                  );
                })}
              </Select>
            </Descriptions.Item>
            <Descriptions.Item label="Enter your income per month before deductions" span={3}>
              <InputNumber
                size="large"
                autoFocus={true}
                step={1000}
                style={{ width: 200 }}
                onChange={value => {
                  this.renderOnSet(this.incomeTax.setTotalAmountBeforeTax, value);
                }}
                min={0}
                formatter={() => formatterUtil.formatValueToCurrencyDisplay(this.incomeTax.getTotalAmountBeforeTax())}
                parser={value => {
                  return value ? value.replace(/R\s?|(,*)/g, '') : '';
                }}
              />
            </Descriptions.Item>
            <Descriptions.Item label="Monthly income tax deducation" span={3}>
              {formatterUtil.formatValueToCurrencyDisplay(this.incomeTax.getTotalTax())}
            </Descriptions.Item>
            <Descriptions.Item label="Total monthly earnings after tax" span={3}>
              {formatterUtil.formatValueToCurrencyDisplay(this.incomeTax.getTotalAmountAfterTax())}
            </Descriptions.Item>
          </Descriptions>
        </Card>
      </React.Fragment>
    );
  }
}

export default IncomeTaxForm;
