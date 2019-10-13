import React from 'react';
import { CustomComponent } from '../CustomComponent';
import { IncomeTax } from './IncomeTax';
import formatterUtil from '../../utils/FormatterUtil';
import numberUtil from '../../utils/NumberUtil';
import TaxRates from './assets/TaxRates2020';
import { Container, Row, Col, InputGroup, FormControl, OverlayTrigger, Tooltip, Popover } from 'react-bootstrap';
import Select from 'react-select';
import config from '../../config';

import { faPlus, faMinus, faEquals, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class IncomeTaxForm extends CustomComponent {
  private cssThemeOptions = {
    noGutters: true,
  };

  private incomeTax: IncomeTax;
  private taxRebateBrackets: Array<any> = [];

  constructor(props: {}) {
    super(props);
    this.incomeTax = new IncomeTax(0);

    let rebateBrackets: Array<any> = TaxRates.taxRebates;
    rebateBrackets.forEach((value, index: number) => {
      let lowerBound = index > 0 ? rebateBrackets[index - 1]['upperBound'] + 1 : 1;
      let upperBound = value['upperBound'];
      this.taxRebateBrackets.push({ value: index, label: lowerBound + ' - ' + upperBound });
    });
  }

  render() {
    return (
      <Container>
        <Row className={'incomeTaxRow'} noGutters={this.cssThemeOptions['noGutters']}>
          <Col className={'incomeTaxDisplayGroupText'} xs={12} md={8} lg={6}>
            Please select your age group
          </Col>
          <Col className={'incomeTaxDisplayGroupInput'} xs={12} md={4} lg={6}>
            <Select
              className="basic-single"
              classNamePrefix="select"
              defaultValue={this.taxRebateBrackets[0]}
              isClearable={false}
              isSearchable={false}
              options={this.taxRebateBrackets}
              onChange={(selectIndex: any) => {
                this.renderOnSet(this.incomeTax.setAgeBracket, selectIndex['value']);
              }}
            />
          </Col>
        </Row>
        <Row className={'incomeTaxRow'} noGutters={this.cssThemeOptions['noGutters']}>
          <Col className={'incomeTaxDisplayGroupText'} xs={12} md={8} lg={6}>
            Enter your income per month before deductions
          </Col>
          <Col className={'incomeTaxDisplayGroupInput'} xs={12} md={4} lg={6}>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>{config.currencyFormat.symbol}</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                type="number"
                aria-label="Basic Income (to the nearest Rand)"
                value={String(this.incomeTax.getTotalAmountBeforeTax())}
                onChange={(event: any) => {
                  let value: number = numberUtil.formatNumberStringAsNumberWithReplacement(event.target.value);
                  this.renderOnSet(this.incomeTax.setTotalAmountBeforeTax, value);
                }}
              />
            </InputGroup>
          </Col>
        </Row>
        <Row className={'incomeTaxRow'} noGutters={this.cssThemeOptions['noGutters']}>
          <Col className={'incomeTaxDisplayGroupText'} xs={12} md={8} lg={6}>
            <FontAwesomeIcon icon={faPlus} color="#389e0d" size="xs" /> Monthly tax rebate given back{' '}
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 400 }}
              overlay={
                <Popover id="">
                  <Popover.Content>Amount to be reclaimed from SARS.</Popover.Content>
                </Popover>
              }
            >
              <FontAwesomeIcon icon={faQuestionCircle} color="#262626" size="xs" />
            </OverlayTrigger>
          </Col>
          <Col className={'incomeTaxDisplayGroupInput'} xs={12} md={4} lg={6}>
            {formatterUtil.formatValueToCurrencyDisplay(this.incomeTax.getRebateAmount())}
          </Col>
        </Row>
        <Row className={'incomeTaxRow'} noGutters={this.cssThemeOptions['noGutters']}>
          <Col className={'incomeTaxDisplayGroupText'} xs={12} md={8} lg={6}>
            <FontAwesomeIcon icon={faMinus} color="#d4380d" size="xs" /> Monthly income tax deducation{' '}
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 400 }}
              overlay={
                <Popover id="">
                  <Popover.Content>Total monthly tax due to be paid to SARS.</Popover.Content>
                </Popover>
              }
            >
              <FontAwesomeIcon icon={faQuestionCircle} color="#262626" size="xs" />
            </OverlayTrigger>
          </Col>
          <Col className={'incomeTaxDisplayGroupInput'} xs={12} md={4} lg={6}>
            {formatterUtil.formatValueToCurrencyDisplay(this.incomeTax.getTotalTax())}
          </Col>
        </Row>
        <Row className={'incomeTaxRow'} noGutters={this.cssThemeOptions['noGutters']}>
          <Col className={'incomeTaxDisplayGroupText'} xs={12} md={8} lg={6}>
            <FontAwesomeIcon icon={faEquals} color="#262626" size="xs" /> Effective monthly earnings after tax and
            rebate
          </Col>
          <Col className={'incomeTaxDisplayGroupInput'} xs={12} md={4} lg={6}>
            {formatterUtil.formatValueToCurrencyDisplay(this.incomeTax.getTotalAmountAfterTax())}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default IncomeTaxForm;
