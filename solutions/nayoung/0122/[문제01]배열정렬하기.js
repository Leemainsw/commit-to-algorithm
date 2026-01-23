const arr = [1, -5, 2, 4, 3];

function solution(arr) {
  return arr.sort((a, b) => a - b);
}
console.log(solution(arr))