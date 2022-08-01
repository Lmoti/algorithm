function solution(a, b) {
    var answer = '';
    let week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    answer = week[new Date(`2016-${a}-${b}`).getDay()];        
    return answer;
}