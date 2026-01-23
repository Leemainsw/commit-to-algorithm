function solution(answers) {
// 정답을 맞춘 수포자들의 번호를 담을 배열
const answer = [];

// 수포자 답안 패턴
const supoja1 = [1, 2, 3, 4, 5];
const supoja2 = [2, 1, 2, 3, 2, 4, 2, 5];
const supoja3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

const score = [0, 0, 0];

// 점수 계산
// 반복문을 통해 각 수포자의 답안 패턴과 비교
for(let i = 0; i < answers.length; i++) {

    // 각 수포자 답안 비교
    if(
        answers[i] === supoja1[i % supoja1.length]
    ) score[0]++;
    if(
        answers[i] === supoja2[i % supoja2.length]
    ) score[1]++;
    if(
        answers[i] === supoja3[i % supoja3.length]
    ) 
        score[2]++;
}

// 최고 점수 구하기 ^ㅂ^
const max = Math.max(...score);

// 최고 점수를 받은 수포자 번호를 answer 배열에 담기
for(let i = 0; i < 3; i++) {
    if(score[i] === max) answer.push(i + 1);
}
  return { answer, score };
}

// 테스트
const { answer, score } = solution([1, 3, 2, 4, 2, 1, 4, 5, 2, 2, 3, 1, 3, 2, 4, 5]);

console.log(`
수포자 1은 ${score[0]}문제를 맞혔습니다.
수포자 2는 ${score[1]}문제를 맞혔습니다.
수포자 3은 ${score[2]}문제를 맞혔습니다.
따라서 가장 문제를 많이 맞힌 사람은 수포자 ${answer}입니다.
`);