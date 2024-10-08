export default function getStudentIdsSum(list) {
  if (!Array.isArray(list)) {
    return 0;
  }
  const ids = list.map((student) => student.id);
  const sum = ids.reduce((prev, next) => prev + next, 0);
  return sum;
}
