function solution(dirs) {
  // 현재 위치를 (0, 0)으로 초기화
  let x = 0;
  let y = 0;

  // 처음 걸어본 길들을 저장할 Set
  // Set은 중복된 값이 자동으로 제거된다
  const visited = new Set();

  // 처음 걸어본 길의 개수를 저장할 변수
  let count = 0;

  // 명령어 문자열을 한 글자씩 반복
  for (let i = 0; i < dirs.length; i++) {
    const dir = dirs[i];

    // 현재 위치를 임시로 저장 (이동 전 좌표)
    let prevX = x;
    let prevY = y;

    // 명령어에 따라 좌표 이동
    if (dir === "U") y += 1;
    else if (dir === "D") y -= 1;
    else if (dir === "R") x += 1;
    else if (dir === "L") x -= 1;

    // 좌표가 경계를 벗어나면 이동을 무시하고 원래 위치로 되돌림
    if (x < -5 || x > 5 || y < -5 || y > 5) {
      x = prevX;
      y = prevY;
      continue;
    }

    // 이동한 길을 문자열로 표현
    // 예: "0,0->0,1"
    const path1 = `${prevX},${prevY}->${x},${y}`;
    // 반대 방향도 같은 길이므로 함께 만들어줌
    const path2 = `${x},${y}->${prevX},${prevY}`;

    // 이 길을 처음 지나간 경우
    if (!visited.has(path1) && !visited.has(path2)) {
      visited.add(path1);
      visited.add(path2);
      count += 1;
    }
  }

  // 처음 걸어본 길의 총 개수 반환
  return count;
}

console.log(solution("ULURRDLLU")); // 7
console.log(solution("LULLLLLLU")); // 7


//----------------------------------------------------------------------------------------------


// 내가 이해한 것

// 좌표는 11x11 격자판이 있고, (0,0)에서 시작해서 U,D,R,L 명령어에 따라 움직인다
// 격자판의 경계는 -5부터 5까지이다
// 나는 처음 걸어본 길의 개수를 세야 한다

// Set 자료구조를 사용해서 처음 걸어본 길을 저장한다
// 왜? Set은 중복된 값을 자동으로 제거해주기 때문에, 같은 길을 여러 번 지나더라도 한 번만 계산할 수 있다

// 이동할 때마다 이전 좌표와 현재 좌표를 문자열로 만들어서 Set에 저장한다
// 이미 Set에 있는 길은 처음 걸어본 길이 아니므로 세지 않는다

// 최종적으로 Set에 저장된 길의 개수를 반환한다
// 이동할 때 경계를 벗어나면 이동을 무시하고 원래 위치로 되돌린다
// 이동한 길은 양방향이므로, "A->B"와 "B->A"를 모두 Set에 저장한다

// 따라서 길을 처음 걸어본 경우는 "A->B"와 "B->A"가 모두 Set에 없는 경우이다
// 처음 걸어본 길의 개수를 세는 변수 count를 사용한다
// 최종적으로 count를 반환한다
