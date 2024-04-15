// 마지막 원소가 그전 원소보다 크면 마지막원소-그전원소
// 마지막 원소가 그전 원소보다 크지않다면 마지막 원소*2
// function solution(num_list) {
//   let answer = [...num_list];
//   const lastEl = num_list[num_list.length - 1];
//   const reLastEl = num_list[num_list.length - 2];
//   if (lastEl > reLastEl) {
//     answer.push(lastEl - reLastEl);
//   } else {
//     answer.push(lastEl * 2);
//   }
//   return answer;
// }

// function solution(n, control) {
//   let result = n;
//   for (let i = 0; i < control.length; i++) {
//     switch (control[i]) {
//       case "w":
//         result += 1;
//         break;
//       case "s":
//         result -= 1;
//         break;
//       case "d":
//         result += 10;
//         break;
//       case "a":
//         result -= 10;
//         break;
//     }
//   }
//   return result;
// }

// 만약 후값-전값이 1이라면 w
// 만약 후값-전값이 -1이라면 s
// 만약 후값-전값이 10이라면 d
// 만약 후값-전값이 -10이라면 a
// function solution(numLog) {
//   let result = "";
//   for (let i = 0; i < numLog.length - 1; i++) {
//     switch (numLog[i + 1] - numLog[i]) {
//       case 1:
//         result += "w";
//         break;
//       case -1:
//         result += "s";
//         break;
//       case 10:
//         result += "d";
//         break;
//       case -10:
//         result += "a";
//         break;
//     }
//   }
//   return result;
// }

// arr는 정수
// queries는 2차원 정수배열
// query는 [i,j] 꼴의 배열
// arr의 i값과 j값을 바꾸는 함수
// function solution(arr, queries) {
//   let array = [...arr];
//   queries.forEach((query) => {
//     let tmp = 0;
//     [i, j] = query;
//     tmp = array[i];
//     array[i] = array[j];
//     array[j] = tmp;
//   });
//   return array;
// } // 구조분해할당을 사용한다면 손쉽게 값 swiching이 가능하다.

// [s,e,k] 꼴의 배열
// s부터 e 까지 돌면서 k보다 큰 수를 찾기
// 없다면 -1 대입
// function solution(arr, queries) {
//   const array = [...arr];
//   let resultArr = [];
//   queries.forEach((query) => {
//     const [s, e, k] = query;
//     let nums = [];
//     for (i = s; i <= e; i++) {
//       if (array[i] > k) {
//         nums.push(array[i]);
//       }
//     }
//     if (nums.length === 0) {
//       resultArr.push(-1);
//     } else resultArr.push(Math.min(...nums));
//   });
//   return resultArr;
// }

// queries 반복문 돌릴거.
// query 또 돌릴거.
// 돌리면서 i가 k의 배수 확인하고 arr[i]에 +1
// 반환.
// function solution(arr, queries) {
//   let result = [...arr];
//   queries.forEach((query) => {
//     const [s, e, k] = query;
//     for (i = s; i <= e; i++) {
//       if (i === 0 || i % k === 0) {
//         result[i]++;
//       }
//     }
//   });
//   return result;
// }

// 정수 l, r 매개변수
// l이상 r이하 정수 중에서만 생각
// '0','5' 로만 이루어져 있어야함
// 오름차순 ㄱ.
// 그전 정수 없으면 -1만 반환 ㄱ.
// function solution(l, r) {
//   const regex = /^(0|5)+$/;
//   let result = [];
//   for (i = l; i <= r; i++) {
//     if (regex.test(String(i))) {
//       result.push(i);
//     }
//   }
//   if (!result.length) {
//     result.push(-1);
//   }
//   return result;
// }

// function solution(start_num, end_num) {
//   let result = [];
//   for(i=start_num;i<=end_num;i++){
//     result.push(i);
//   }
//   return result;
// }

// function solution(n) {
//   let answer = [];
//   let num = n;
//   while (num !== 1) {
//     if (num % 2 === 0) {
//       answer.push(num);
//       num /= 2;
//     } else {
//       answer.push(num);
//       num = 3 * num + 1;
//     }
//   }
//   answer.push(1);
//   return answer;
// }

// function solution(arr) {
//   let stk = [];
//   let i = 0;
//   while (i < arr.length) {
//     if (!stk.length) {
//       stk.push(arr[i]);
//       i++;
//     } else if (stk[stk.length - 1] < arr[i]) {
//       stk.push(arr[i]);
//       i++;
//     } else if (stk[stk.length - 1] >= arr[i]) {
//       stk.pop();
//     }
//   }
//   return stk;
// }

// function solution(x1, x2, x3, x4) {
//   return (x1 || x2) && (x3 || x4);
// }

// 수 전부 같으면 => 1111 * p
// 세 수가 같고 하나만 다르면 => (10*p+q)*(10*p+q)
// 두 개씩 같은 값 => (p+q)*|p-q|
// 두 개가 같고(p) 각각 다르면(q,r) => q*r
// 전부 다르면 => 가장 작은 수
// sort
// function AscSorting(arr) {
//   return arr.sort((a, b) => a - b);
// }

function solution(a, b, c, d) {
  const diceArr = [a, b, c, d];
  const dice = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
  };
  diceArr.forEach((val) => {
    dice[val]++;
  });
  const counts = Object.values(dice).filter((item) => item !== 0);
  let p = 0;
  let q = 0;
  let r = 0;
  //모두 같을 때
  if (counts.includes(4)) {
    p = Object.keys(dice).filter((key) => dice[key] !== 0)[0];
    return 1111 * p;
  }
  //3개가 같고 1개만 다를 때
  if (counts.includes(3) && counts.includes(1)) {
    p = Object.keys(dice).filter((key) => dice[key] === 3)[0];
    q = Object.keys(dice).filter((key) => dice[key] === 1)[0];
    return (10 * Number(p) + Number(q)) ** 2;
  }
  //2개 같고 2개 같을 때
  if (counts.includes(2) && !counts.includes(1)) {
    p = Object.keys(dice).filter((key) => dice[key] === 2)[0];
    q = Object.keys(dice).filter((key) => dice[key] === 2)[1];
    return (Number(p) + Number(q)) * Math.abs(Number(p) - Number(q));
  }
  //2개 같고 1개 1개 각각 다를 때
  if (counts.includes(2) && counts.includes(1)) {
    p = Object.keys(dice).filter((key) => dice[key] === 2)[0];
    q = Object.keys(dice).filter((key) => dice[key] === 1)[0];
    r = Object.keys(dice).filter((key) => dice[key] === 1)[1];
    return Number(q) * Number(r);
  }
  //전부 다를 때
  if (counts.length === 4 && counts.includes(1)) {
    const validArr = Object.keys(dice)
      .filter((key) => dice[key] !== 0)
      .map((item) => Number(item));
    return Math.min(...validArr);
  }
}
