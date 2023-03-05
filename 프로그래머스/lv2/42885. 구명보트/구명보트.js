function solution(people, limit) {
    let answer = 0;
    let i = 0;
    let j = people.length-1;
    people.sort((a, b) => a - b);

    while (i <= j) {
        if(people[i] + people[j] <= limit) i++;
        answer++;
        j--;
    }
    return answer;
}