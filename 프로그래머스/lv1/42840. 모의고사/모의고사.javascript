function solution(answers) {
    const supoja1 = '12345'.repeat(answers.length).slice(0, answers.length).split('');
    let supojacount1 = 0;
    const supoja2 = '21232425'.repeat(answers.length).slice(0, answers.length).split('');
    let supojacount2 = 0;
    const supoja3 = '3311224455'.repeat(answers.length).slice(0, answers.length).split('');
    let supojacount3 = 0;
    const supojas = [supoja1, supoja2, supoja3];
    const supojacounts = [supojacount1, supojacount2, supojacount3];
    const correctNum = [];
    const answer = [];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < answers.length; j++) {
            if (Number(answers[j]) === Number(supojas[i][j])) {
                supojacounts[i] += 1;
            }
        }
        correctNum.push(supojacounts[i]);
    }
    let maxCorrect = 0;
    for (let i = 0; i < 3; i++) {
        if (correctNum[i] !== 0 && correctNum[i] > maxCorrect) {
            maxCorrect = correctNum[i]
        }
    }
    for (let i = 0; i < 3; i++) {
        if (correctNum[i] === maxCorrect) {
            answer.push(correctNum.indexOf(Math.max(...correctNum)) + 1);
            correctNum.splice(correctNum.indexOf(Math.max(...correctNum)), 1, 0)
        }
    }
    return answer;
}