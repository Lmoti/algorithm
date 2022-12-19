function solution(quiz) {
    let answer = '';
    quiz.forEach((n) => {
        Number(n.split(' ').at(-1)) === eval(n.split(' ').slice(0, 3).join(' ')) ? answer += 'O' : answer += 'X';
    })
    return answer.split('');
}