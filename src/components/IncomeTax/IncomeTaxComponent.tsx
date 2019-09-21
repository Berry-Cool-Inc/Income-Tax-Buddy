import React from 'react';
import { CustomComponent } from '../CustomComponent';
import { Button, Checkbox, Form, Icon, InputNumber, Row, Col, Card, Descriptions, Input } from 'antd';
import { IncomeTax } from './IncomeTax';
import formatterUtil from '../../utils/FormatterUtil';

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
            <Descriptions.Item label="Enter your income per month before deductions" span={3}>
              <InputNumber
                size="large"
                autoFocus={true}
                step={1000}
                style={{ width: 200 }}
                onChange={value => {
                  this.renderOnSet(this.incomeTax.setBasicIncome, value);
                }}
                min={0}
                formatter={() => formatterUtil.formatValueToCurrencyDisplay(this.incomeTax.getBasicIncome())}
                parser={value => {
                  return value ? value.replace(/R\s?|(,*)/g, '') : '';
                }}
              />
            </Descriptions.Item>
            <Descriptions.Item label="Tax before amount" span={3}>
              {this.incomeTax.getBasicIncome()}
            </Descriptions.Item>
            <Descriptions.Item label="Tax before amount" span={3}>
              {this.incomeTax.getBasicIncome()}
            </Descriptions.Item>
            <Descriptions.Item label="Tax before amount" span={3}>
              {this.incomeTax.getBasicIncome()}
            </Descriptions.Item>
          </Descriptions>
        </Card>
      </div>
    );
  }
}

export default IncomeTaxForm;
