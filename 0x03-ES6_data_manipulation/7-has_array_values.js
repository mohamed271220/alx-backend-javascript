export default function hasArrayValues(set, arr) {
  return arr.every((element) => set.has(element));
}
