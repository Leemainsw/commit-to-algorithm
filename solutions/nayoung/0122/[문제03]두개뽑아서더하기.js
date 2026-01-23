function solution(numbers) {
  // set : 중복 자동 제거
  // result : 최종 결과 배열
  const resultSet = new Set();

  // 이중 반복문으로 모든 서로 다른 인덱스 쌍을 탐색
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      // 두 수의 합 계산
      const sum = numbers[i] + numbers[j];

      // Set에 추가 (이미 있으면 자동으로 무시됨)
      resultSet.add(sum);
    }
  }

  // Set을 배열로 변환
  const result = [...resultSet];

  // 오름차순 정렬
  result.sort((a, b) => a - b);

  // 결과 반환
  return result;
}

console.log(solution([2, 1, 3, 4, 1]));
// 출력: [2, 3, 4, 5, 6, 7]

console.log(solution([5, 0, 2, 7]));
// 출력: [2, 5, 7, 9, 12]