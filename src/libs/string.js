export function countChar(str, char) {
  let count = 0;
  for (let chunk of str) if (chunk === char) count += 1;

  return count;
}
