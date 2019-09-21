import config from '../config';
import roundUtil from './RoundUtil';

function formatValueToCurrencyDisplay(value: number) {
  if (config.currencyFormat['prefix'])
    return (
      config.currencyFormat['symbol'] + ' ' + roundUtil.roundDecimals(value, config.currencyFormat['decimalPlaces'])
    );
  return roundUtil.roundDecimals(value, config.currencyFormat['decimalPlaces']) + config.currencyFormat['symbol'];
}

export default { formatValueToCurrencyDisplay };
