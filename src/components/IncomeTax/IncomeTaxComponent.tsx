import React from 'react';
import { CustomComponent } from '../CustomComponent';
import { InputNumber, Card, Descriptions, Select } from 'antd';
import { IncomeTax } from './IncomeTax';
import formatterUtil from '../../utils/FormatterUtil';

const { Option, OptGroup } = Select;

export class IncomeTaxForm extends CustomComponent {
  private incomeTax: IncomeTax;

  constructor(props: {}) {
    super(props);
    this.incomeTax = new IncomeTax(0);
  }

  render() {
    return (
      <div>
        <Card style={{ width: 800 }}>
          <Descriptions size="middle" bordered>
            <Descriptions.Item label="Please select your age group:" span={3}>
              <Select
                defaultValue={this.incomeTax.getAgeBracket()}
                style={{ width: 200 }}
                onChange={this.incomeTax.setAgeBracket}
              >
                <Option value="0">1 - 64</Option>
                <Option value="1">65 - 74</Option>
                <Option value="2">75 - </Option>
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
      </div>
    );
  }
}

export default IncomeTaxForm;
