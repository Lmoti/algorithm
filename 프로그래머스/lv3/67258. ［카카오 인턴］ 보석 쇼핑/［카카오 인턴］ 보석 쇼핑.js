function solution(gems) {
    const count = new Set(gems).size;
    let answer = [1, gems.length];
    let l = 0;
    let r = 0;
    
    if (count.size === 1) return [1, 1];
    if (count === gems.lenth) return answer;
    
    const map = new Map();
    map.set(gems[0], 1);
    
    while (r < gems.length) {
        if (map.size === count) {
            if (answer[1] - answer[0] > r - l) answer = [l + 1, r + 1];
                
            map.set(gems[l], map.get(gems[l]) - 1);
            if (map.get(gems[l]) === 0) map.delete(gems[l]);
            
            l++;
        } else {
            r++;
            map.set(gems[r], map.get(gems[r]) ? map.get(gems[r]) + 1 : 1);
        }
    }
    return answer;
}
