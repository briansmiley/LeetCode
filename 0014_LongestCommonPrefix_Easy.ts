/**Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "". */
function longestCommonPrefix(strs: string[]): string {
  const prefix: string[] = [];
  const strArrs = strs.map(str => str.split(""));
  for (const [idx, char] of strArrs[0].entries()) {
    if (!strArrs.every(arr => arr[idx] === char)) break;
    prefix.push(char);
  }
  return prefix.join("");
}
