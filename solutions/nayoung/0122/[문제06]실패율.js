function solution(N, stages) {
  // 각 스테이지에 머물러 있는 사용자 수를 저장할 배열
  const stageCount = Array(N + 2).fill(0);

  // stages 배열을 순회하면서 각 스테이지에 머물러 있는 인원 수를 센다
  for (let i = 0; i < stages.length; i++) {
    stageCount[stages[i]]++;
  }

  // 결과를 저장할 배열 (스테이지 번호와 실패율을 함께 저장)
  const result = [];

  // 현재 스테이지에 도달한 총 사용자 수
  let players = stages.length;

  // 1번 스테이지부터 N번 스테이지까지 실패율 계산
  for (let stage = 1; stage <= N; stage++) {
    let failRate = 0;

    // 해당 스테이지에 도달한 사용자가 있는 경우만 실패율 계산
    if (players > 0) {
      failRate = stageCount[stage] / players;
    } else {
      failRate = 0;
    }

    // 스테이지 번호와 실패율을 객체로 저장
    result.push({ stage: stage, rate: failRate });

    // 다음 스테이지로 넘어가기 전에 현재 스테이지에 머물러 있던 인원을 제외
    players -= stageCount[stage];
  }

  // 실패율 내림차순 정렬
  // 실패율이 같으면 스테이지 번호 오름차순 정렬
  result.sort((a, b) => {
    if (b.rate === a.rate) {
      return a.stage - b.stage;
    }
    return b.rate - a.rate;
  });

  // 정렬된 결과에서 스테이지 번호만 추출해서 반환
  return result.map(item => item.stage);
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
// [3, 4, 2, 1, 5]
console.log(solution(4, [4, 4, 4, 4, 4]));
// [4, 1, 2, 3]
