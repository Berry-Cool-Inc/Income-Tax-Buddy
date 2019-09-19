import React, { Component } from 'react';
import { Button, Checkbox, Form, Icon, InputNumber } from 'antd';
import { IncomeTax } from './IncomeTax';

export class IncomeTaxForm extends Component {
  incomeTax: IncomeTax = new IncomeTax(0);

  render() {
    return (
      <Form layout="inline">
        <Form.Item>
          <InputNumber
            defaultValue={0}
            size="large"
            onChange={this.incomeTax.setBasicIncome}
            min={0}
            formatter={value => `R ${this.incomeTax.getBasicIncome()}`}
            parser={value => {
              return value ? value.replace(/R\s?|(,*)/g, '') : '';
            }}
          />
        </Form.Item>
      </Form>
    );
  }
}

export default IncomeTaxForm;
