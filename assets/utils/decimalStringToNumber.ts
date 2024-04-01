// convert string in format "10,50" to number 10.5
export default function decimalStringToNumber(value: string): number {
  const decimalWithPoint = value.replace(',', '.');
  const decimalFromString = parseFloat(decimalWithPoint);

  return decimalFromString;
}
