function formatNumberStringAsNumberWithReplacement(value: String) {
  // Replace all text in variable
  let pattern = /[^(^\d+\.\d{0,2})]/g;
  return Number(value.replace(pattern, ''));
}

export default { formatNumberStringAsNumberWithReplacement };
