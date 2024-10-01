export default function iterateThroughObject(reportWithIterator) {
  //  console.log("inside"+reportWithIterator);
  // desired output 'John Doe | Guillaume Salva | Kanye East | Jay Li'

  let result = '';
  for (const item of reportWithIterator) {
    result += `${item} | `;
  }
  return result.slice(0, -3);
}
