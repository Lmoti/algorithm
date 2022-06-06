function solution(s) {
    const sp = s.split(' ');
    return sp.map(word => {
        return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
    }).join(' ');
}