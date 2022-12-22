function solution(num, total) {
    const answer = [];
    let n = (2*total/num + 1 - num) / 2;
    for (let i = 0; i < num; i++) {
        answer.push(n + i);
    }
    return answer;
}
// 우리가 구하고자 하는 answer의 첫째항을 a로 가정한 후,
// a를 구하면 num만큼 반복시켜 answer를 구성할 예정입니다.

// total = a + (a+1) + (a+2) + ... + (a+n-1)
// total = (a+n-1) + (a+n-2) + (a+n-3) + ... +a

// 좌변, 우변끼리 더하면
// 2total = (2a+n-1) + (2a+n-1) + (2a+n-1) + ... (2a+n-1) 입니다.
// 여기서 우변의 반복되는 항은 n개가 있으므로 다시 정리하면
// 2total = (2a+n-1)n이 됩니다.

// 이제 a를 구해보자면...
// int a = (2*total/num + 1 - num) / 2;

// 이제 a를 구했으니 for문으로 answer를 구성해주면 됩니다.
// for(int i = 0; i < num; i++)
// answer에 (a+i)를 넣는다.